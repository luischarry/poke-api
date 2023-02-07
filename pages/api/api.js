const url='https://pokeapi.co/api/v2/pokemon/'
export const bringpokemon=async(name) =>{
    return fetch(`${url}${name}`)
    .then((response) => response.json())
    .then(data => data)
}