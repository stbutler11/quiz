
const cacheSize = 10;
const apiEndpoint = `https://jservice.io/api/random?count=${cacheSize}`;

function mapToLocalFormat(remoteQuestion) {
    const category = `Jeopardy: ${remoteQuestion.category.title}(${remoteQuestion.value})`;
    return {
        answer: remoteQuestion.answer,
        category,
        // Add category to question until it's visible in the UI
        question: `${category} - ${remoteQuestion.question}`,
        type: "open",
    }
}

function mapResponseJsonToQuestions(responseJson) {
    return responseJson.map(mapToLocalFormat);
}

class QuestionFetchCache {

    constructor(fetchUrl, mappingFn) {
        this.questions = [];
        this.fetchUrl = fetchUrl;
        this.mappingFn = mappingFn;
        this.currentIndex = -1;
    }

    async nextQuestion() {
        this.currentIndex++;
        if (!this.questions[this.currentIndex]) {
            this.currentIndex = 0;
            const response = await fetch(this.fetchUrl);
            const responseJson = await response.json();
            this.questions = this.mappingFn(responseJson); 
        }
        return this.questions[this.currentIndex];
    }
}


const questionCache = new QuestionFetchCache(apiEndpoint, mapResponseJsonToQuestions);

export async function nextQuestion() {
    return questionCache.nextQuestion();
}