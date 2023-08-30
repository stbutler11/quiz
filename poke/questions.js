export async function nextQuestion() {
    const { name, src } = await nextPokemon();
    return {
        answer: name,
        category: "Pokemon",
        imageUrl: src,
        question: "Name this Pokemon",
        type: "open",
    }
}

async function nextPokemon() {
    const id = Math.floor(Math.random() * 500);
    const pokemonResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const json = await pokemonResponse.json();
    return {
        name: json.name,
        src: json.sprites.other.dream_world.front_default
    }
}