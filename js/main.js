console.log('Hello World')

const pokeApi = async function(pokeName){
	let api = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeName}/`);
	let pokemonInfo = await api.json();
	return await pokemonInfo;
}


let pokeForm = document.getElementById('pokeForm');

pokeForm.addEventListener('submit', async (event) => {
	event.preventDefault();
	let pokeName = event.target.pokeName.value.toLowerCase();
	let pokeInfo = await pokeApi(pokeName)
	updateInfoCard(pokeInfo)
})


const updateInfoCard = function(pokemon){
	let {pokeName, pokeAbility1, pokeAbility2, pokeImage, pokeType} = {
		pokeName: document.getElementById('pokemonName'),
		pokeAbility1: document.getElementById('pokeAbility1'),
		pokeAbility2: document.getElementById('pokeAbility2'),
		pokeImage: document.getElementById('pokeImage'),
		pokeType: document.getElementById('pokeType')
	}

	pokeName.innerHTML = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)
	pokeAbility1.innerHTML = `<strong>Ability 1:</strong> ${pokemon.abilities[0].ability.name}`
	pokeAbility2.innerHTML = `<strong>Ability 2:</strong> ${pokemon.abilities[1].ability.name}`
	pokeType.innerHTML = `<strong>Type:</strong> ${pokemon.types[0].type.name}`
	pokeImage.src = pokemon.sprites.other.dream_world.front_default
}