let questions;
let currentIndex = -1;

async function fetchQuestions() {
    const questionsResponse = await fetch("https://opentdb.com/api.php?amount=10&difficulty=easy&type=multiple");
    const json = await questionsResponse.json();
    return json.results;
}

export async function nextQuestion() {
    currentIndex++;
    const question = currentQuestion();
    if (!currentQuestion()) {
        questions = await fetchQuestions();
        currentIndex = 0;
    }
    return currentQuestion();
}

function currentQuestion() {
    if (!questions || !questions[currentIndex]) {
        return;
    }
    const questionDetails = questions[currentIndex];
    const question = decodeHtml(questionDetails.question);
    const answer = decodeHtml(questionDetails.correct_answer);
    let type;
    if (question.startsWith("Which ")) {
        type = "multiple";
    } else if (parseInt(answer, 10) >= 0 ) {
        type = "calc";
    } else {
        type = "letters"
    }

    return {
        question,
        type,
        answer,
        incorrectAnswers: questionDetails.incorrect_answers.map(a => decodeHtml(a))
    }
}

// FIXME C&P
function decodeHtml(html) {
    var txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
}