const signs = [
  ["1st",	"♈︎︎",	"Aries",	"Ram"],
  ["2nd",	"♉︎︎",	"Taurus",	"Bull"],
  ["3rd",	"♊︎︎",	"Gemini",	"Twins"],
  ["4th",	"♋︎︎",	"Cancer",	"Crab"],
  ["5th",	"♌︎︎",	"Leo",	"Lion"],
  ["6th",	"♍︎︎",	"Virgo",	"Maiden"],
  ["7th",	"♎︎︎",	"Libra",	"Scales"],
  ["8th",	"♏︎︎",	"Scorpio",	"Scorpion"],
  ["9th",	"♐︎︎",	"Sagittarius",	"(Centaur) Archer"],
  ["10th",	"♑︎︎",	"Capricornus",	"Mountain Goat or 'Goat-horned Sea-Goat"],
  ["11th",	"♒︎︎",	"Aquarius",	"Water-Bearer"],
  ["12th",	"♓︎︎",	"Pisces", "Fish"]
];

function randomFromArray(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

export async function nextQuestion() {
  const [position, symbol, name, representation] = randomFromArray(signs);
  const question = randomFromArray([
    `What is the ${position} sign of the Zodiac?`,
    `What sign is represented by the symbol '${symbol}'?`,
    `What sign is represented by a ${representation}?`
  ]);
  return {
      answer: name,
      category: "Astrology",
      question,
      type: "open"
  }
}
