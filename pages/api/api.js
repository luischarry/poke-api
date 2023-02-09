const url='https://pokeapi.co/api/v2/pokemon/'

export async function getServerSideProps() {
    const traerpokemon =(numero)=> {
        return fetch (`${url}${numero}`)
        .then(response => response.json())
        .then(data=>data)
        
    }
    let arrayPokemon =[]
    for (let i=1; i<20;i++){
        let data = await traerpokemon(i)
        arrayPokemon.push(data)
        console.log ("aqui entra", data)
    }
    let arrayPokemon2 = arrayPokemon.map(pokemon => {
        return ({
          id: pokemon.id,
          name: pokemon.name,
          image: pokemon.sprites.other.dream_world.front_default,
          types: pokemon.types
        })
      })
      return {
        props: {
          arrayPokemon2
        }
    }
}