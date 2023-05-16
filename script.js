const pokemonList = document.getElementById("pokemonList")

const loadMore = document.getElementById("loadMore")
const limit = 10
let offset = 0;
// const convertPokemonToLi = (pokemon) => {
//     return `                <li class="pokemon ${pokemon.type}">
//     <div class="id">
//         <span>${pokemon.name}</span>
//         <span>${pokemon.number}</span>
//     </div>
//     <div class="imgs">
//         <img src="${pokemon.photo}" alt="${pokemon.name}">
//     </div>
//     <div class="types">
//         ${pokemon.types.map((type) => `<span class="type ${type}">${type}</span>`).join('')}
//     </div>

// </li>`
// }
// pokeApi.getPokemons().then((pokemons = []) => {
    
//     pokemonList.innerHTML = pokemons.map(convertPokemonToLi).join('')
    
// })

const loadPokemon = (offset, limit) => {
    pokeApi.getPokemons(offset, limit).then(( pokemons =[]) => {
        const newHtml = pokemons.map((pokemon) => 
        `                <li class="pokemon ${pokemon.type}">
        <div class="id">
            <span>${pokemon.name}</span>
            <span>${pokemon.number}</span>
        </div>
        <div class="imgs">
            <img src="${pokemon.photo}" alt="${pokemon.name}">
        </div>
        <div class="types">
            ${pokemon.types.map((type) => `<span class="type ${type}">${type}</span>`).join('')}
        </div>
    
    </li>`
        
    ).join('')
        pokemonList.innerHTML += newHtml
        
    })



}
loadMore.addEventListener('click', () => {
    offset += limit
    loadPokemon(offset, limit)
})
loadPokemon(offset, limit)
