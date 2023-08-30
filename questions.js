import { nextQuestion as nextGeneralQuestion } from "./general/questions.js";

export async function nextQuestion() {
    return nextGeneralQuestion();
}