import "https://labeg.github.io/alertify.js/js/alertify.js";
const { alertify } = alertifyjs;

let numCorrect = 0;
let numIncorrect = 0;
let calculator;
let nextQ;
let currentQuestion;

async function onCorrect() {
    await alertify.alert(`
        <span style="color: green;">Correct</span> </br>
        ${currentQuestion.answer}
    `);
    incrementCorrect();
}

async function onIncorrect(wrongAnswer) {
    await alertify.alert(`
        <span style="color: red;">Incorrect</span> </br>
        Selected answer: <strong>${wrongAnswer}</strong> </br>
        Correct answer : <strong>${currentQuestion.answer}</strong>
    `);
    incrementIncorrect();
}


function initLetters() {
    const letters = [...document.getElementsByClassName("letter")];
    letters.map(l => new ElementWrapper(l)).forEach(l => {
        l.addTouchHandler(async () => {
            const letter = l.getInnerHTML();
            const rootAnswer = currentQuestion.answer;
            // Remove "The" from the answer
            const answerWithoutThe = rootAnswer.replace(/\s*[T|t]he\s+(.*)/, "$1");
            if (letter.split("/").find(l => answerWithoutThe.toUpperCase().startsWith(l))) {
                // TODO const answerWithTheInBrackets = rootAnswer.replace(/\s*([T|t]he)(\s+)(.*)/, "($1)$2$3");
                await onCorrect();
            } else {
                await onIncorrect(letter);
            }
            showNextQuestion();
        });
    });
}

function initCalcualtor() {
    calculator = new Calculator("calc", async (input) => {
        const answer = currentQuestion.answer;
        if (parseInt(input, 10) === parseInt(answer, 10)) {
            await onCorrect();
        } else {
            await onIncorrect(input);
        }
        showNextQuestion();
    });
}

function initImage() {
    const imageContainer = new ElementWrapper(document.getElementById("image-container"));
    imageContainer.addTouchHandler(() => {
        removeAppClass("show-image");
        document.getElementById("image").src = "";
    });
}

async function showNextQuestion() {
    currentQuestion = await nextQ();
    const { question, type, answer, incorrectAnswers, imageUrl } = currentQuestion;
    const questionDiv = new ElementWrapper(document.getElementById("question"));
    questionDiv.replaceChildren(question);
    let appClass;
    if (type === "calc") {
        calculator.reset();
        appClass = "show-calc";
    } else if (type === "multiple") {
        const choices = [answer, ...incorrectAnswers];
        shuffleArray(choices);
        showMultiple(choices, async (selectedAnswer) => {
            const answer = currentQuestion.answer;
            if (selectedAnswer === answer) {
                await onCorrect();
            } else {
                await onIncorrect(selectedAnswer);
            }
            showNextQuestion();
        });
        appClass = "show-multiple";
    } else {
       appClass = "show-letters";
    }
    if (imageUrl) {
        document.getElementById("image").src = imageUrl;
        appClass = `${appClass} show-image`;
    }
    setAppClass(appClass);
}

function showMultiple(choices, onselected) {
    [...document.getElementsByClassName("choice")].map(elem => new ElementWrapper(elem)).forEach( (c,i) => {
        c.replaceChildren(choices[i] || "");
        c.addTouchHandler(() => {
            onselected(c.getInnerHTML());
        });
    });
}

function setAppClass(c) {
    document.getElementById("app").setAttribute("class", c);
}

function removeAppClass(c) {
    const currentClass = document.getElementById("app").getAttribute("class");
    document.getElementById("app").setAttribute("class", currentClass.replace(c, ""));
}

function incrementCorrect() {
    numCorrect++;
    document.getElementById("correct").replaceChildren(`${numCorrect}`);
}

function incrementIncorrect() {
    numIncorrect++;
    document.getElementById("incorrect").replaceChildren(`${numIncorrect}`);
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}


// Thin element wrapper for cross-browser stuff
class ElementWrapper {

    constructor(element) {
        this.element = element;
    }

    /**
     * Adds a touch handler to the wrapped element
     * @param {Function} handler 
     */
    addTouchHandler(handler) {
        const listener = e => {
            e.preventDefault();
            handler();
        }
        this.element.addEventListener("touchstart", listener);
        this.element.addEventListener("mousedown", listener);
    }

    /**
     * 
     * @param {(string | Node)[]} children 
     */
    replaceChildren(children) {
        this.element.replaceChildren(children);
    }

    getInnerHTML() {
        return this.element.innerHTML || this.element.getInnerHTML()
    }
}

class Calculator {

    constructor(id, onenter){
        this.currentNumber = -1;
        const calcDom = document.getElementById(id);
        this.calcDisplay = calcDom.querySelector('.calc-display');
        const numbers = [...calcDom.querySelectorAll('.number')]
            .map(n => new ElementWrapper(n));
        numbers.forEach(n => {
            n.addTouchHandler(() => {
                const number = parseInt(n.getInnerHTML(), 10);
                if (this.currentNumber < 0) {
                    this.currentNumber = number;
                } else {
                    this.currentNumber = (this.currentNumber * 10) + number;
                }
                this.calcDisplay.replaceChildren(`${this.currentNumber}`);
            });
        });
        const calcCancel = new ElementWrapper(calcDom.querySelector('.calc-cancel'));
        calcCancel.addTouchHandler(() => this.reset());
        const calcEnter = new ElementWrapper(calcDom.querySelector('.calc-enter'));
        calcEnter.addTouchHandler(() => onenter(this.currentNumber));
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
    initImage();
    nextQ = nextQuestionFn;
    showNextQuestion();
}
