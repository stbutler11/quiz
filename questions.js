import { nextQuestion as nextGeneralQuestion } from "./general/questions.js";
import { nextQuestion as nextPokemonQuestion } from "./poke/questions.js";
import { nextQuestion as nextHarryPotterQuestion } from "./hp/questions.js";

const weights = [
    { weight: 20, fn: nextGeneralQuestion },
    { weight: 1, fn: nextPokemonQuestion },
    { weight: 1, fn: nextHarryPotterQuestion }
];

let currentWeightedPosition = 0;
const weightedPositions = weights.map(w => {
    const weightedPosition = currentWeightedPosition + w.weight;
    currentWeightedPosition = weightedPosition;
    return {
        weightedPosition,
        fn: w.fn
    };
});

const maxIndex = weightedPositions.at(-1).weightedPosition;

function getQuestionAtPosition(i) {
    return weightedPositions.find( ({ weightedPosition }) => weightedPosition > i ).fn;
}


export async function nextQuestion() {
    const index = Math.floor(Math.random() * maxIndex);
    return getQuestionAtPosition(index)();
}