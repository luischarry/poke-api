const url='https://pokeapi.co/api/v2/pokemon/'

export async function getServerSideProps({ params }) {
    const traerpokemon = numero => {
      return fetch(`${url}${numero}`)
        .then(response => response.json())
        .then(data => data);
    };
  
    const limit = 20;
    const page = params?.page ? parseInt(params.page) : 1;
    const offset = (page - 1) * limit;
  
    let arrayPokemon = [];
    for (let i = 1 + offset; i <= limit + offset; i++) {
      let data = await traerpokemon(i);
      arrayPokemon.push(data);
    }
    let arrayPokemon2 = arrayPokemon.map(pokemon => {
      return {
        id: pokemon.id,
        name: pokemon.name,
        image: pokemon.sprites.other.dream_world.front_default,
        types: pokemon.types
      };
    });
    return {
      props: {
        arrayPokemon2,
        page,
        limit
      }
    };
  }

  