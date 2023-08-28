let numCorrect = 0;
let numIncorrect = 0;
let calculator;
let nextQ;
let currentQuestion;

function initLetters() {
    const letters = [...document.getElementsByClassName("letter")];
    letters.forEach(l => {
        l.ontouchstart = () => {
            const letter = l.getInnerHTML();
            const rootAnswer = currentQuestion.answer;
            // Remove "The" from the answer
            const answerWithoutThe = rootAnswer.replace(/\s*[T|t]he\s+(.*)/, "$1");
            if (letter.split("/").find(l => answerWithoutThe.startsWith(l))) {
                incrementCorrect();
                console.log(score);
            } else {
                increamentIncorrect();
                console.error("miss");
            }
            const answerWithTheInBrackets = rootAnswer.replace(/\s*([T|t]he)(\s+)(.*)/, "($1)$2$3")
            alert(`${letter}: ${answerWithTheInBrackets}`);
            showNextQuestion();
        }
    });
}

function initCalcualtor() {
    calculator = new Calculator("calc", (input) => {
    const answer = currentQuestion.answer;
    if (parseInt(input, 10) === parseInt(answer, 10)) {
        incrementCorrect();
    } else {
        increamentIncorrect();
    }
    alert(`
            You guessed: ${input} 
            The correct answer is: ${answer}
        `);
        showNextQuestion();
    });
}

async function showNextQuestion() {
    currentQuestion = await nextQ();
    const { question, type, answer, incorrectAnswers } = currentQuestion;
    const questionDiv = document.getElementById("question");
    questionDiv.replaceChildren(question);

    if (type === "calc") {
        showCalc();
    } else if (type === "multiple") {
        const choices = [answer, ...incorrectAnswers];
        shuffleArray(choices);
        showMultiple(choices, (selectedAnswer) => {
            const answer = currentQuestion.answer;
            if (selectedAnswer === answer) {
                incrementCorrect();
            } else {
                increamentIncorrect();
            }
            alert(`
                You guessed: ${selectedAnswer} 
                The correct answer is: ${answer}
            `);
            showNextQuestion();
        });
    } else {
        showLetters();
    }
}

function showCalc() {
    calculator.reset();
    document.getElementById("app").setAttribute("class", "show-calc");
}

function showLetters() {
    document.getElementById("app").setAttribute("class", "show-letters");
}

function showMultiple(choices, onselected) {
    [...document.getElementsByClassName("choice")].forEach( (c,i) => {
        c.replaceChildren(choices[i] || "");
        c.ontouchstart = () => {
            onselected(c.getInnerHTML());
        }
    });
    document.getElementById("app").setAttribute("class", "show-multiple");
}

function incrementCorrect() {
    numCorrect++;
    document.getElementById("correct").replaceChildren(`${numCorrect}`);
}

function increamentIncorrect() {
    numIncorrect++;
    document.getElementById("incorrect").replaceChildren(`${numIncorrect}`);
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

class Calculator {

    constructor(id, onenter){
        this.currentNumber = -1;
        const calcDom = document.getElementById(id);
        this.calcDisplay = calcDom.querySelector('.calc-display');
        const numbers = [...calcDom.querySelectorAll('.number')];
        numbers.forEach(n => {
            n.ontouchstart = () => {
                const number = parseInt(n.getInnerHTML(), 10);
                if (this.currentNumber < 0) {
                    this.currentNumber = number;
                } else {
                    this.currentNumber = (this.currentNumber * 10) + number;
                }
                this.calcDisplay.replaceChildren(`${this.currentNumber}`);
            }
        });
        const calcCancel = calcDom.querySelector('.calc-cancel');
        calcCancel.onclick = () => this.reset();
        const calcEnter = calcDom.querySelector('.calc-enter');
        calcEnter.onclick = () => onenter(this.currentNumber);
        this.onenter = onenter;
    }

    reset() {
        this.currentNumber = -1;
        this.calcDisplay.replaceChildren("-");
    }
}

async function loadParentPage() {
    if (document.getElementById("app")) {
        return; // Already defined
    }
    const htmlResponse = await fetch("../index.html");
    const htmlText = await htmlResponse.text();
    const html = document.createElement("html");
    html.innerHTML = htmlText;
    const style = html.getElementsByTagName("style").item(0);
    document.head.appendChild(style);
    const appDiv = [...html.getElementsByTagName("div")].find(e => e.getAttribute("id") === "app");
    document.body.appendChild(appDiv);
}

export async function start(nextQuestionFn) {
    await loadParentPage();
    initLetters();
    initCalcualtor();
    nextQ = nextQuestionFn;
    showNextQuestion();
}

