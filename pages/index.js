import React from "react"
import Link from "next/link"
import HomeCss from "../styles/Home.module.css"
export default function Home({ arrayPokemon2 }) {

  return (
    <>
      <ul>
        {arrayPokemon2.map((pokemon, index) => {
          return (
            <li>
              <Link href={{pathname:'/pokemon/[name]',
              query:{name:pokemon.name}
            }}>
                <div>
                  <div >
                    <h3>
                      {pokemon.name}
                    </h3>
                    <div>
                      {pokemon.types.map((tipo, index) => {
                        return (
                          <p>{tipo.type.name}</p>
                        )
                      })}
                    </div>
                    <img src={pokemon.image} height="100" width={100} />
                  </div>
                </div>
              </Link>
            </li>
          )
        })
        }</ul>

    </>
  )
}
export async function getServerSideProps() {
  const traerpokemon = (numero) => {
    return fetch(`https://pokeapi.co/api/v2/pokemon/${numero}`)
      .then((response) => response.json())
      .then(data => data)
  }
  let arrayPokemon = []
  for (let i = 1; i <= 20; i++) {
    let data = await traerpokemon(i)
    arrayPokemon.push(data)
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