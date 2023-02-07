import React from "react";

export default function Pokemon({ pokemon }) {
    console.log("Pokemon", pokemon);
    return (
        <div>
            <h1>{pokemon.name}</h1>
            <div>
                {pokemon.types.map((tipo, index) => {
                    return (
                        <p>{tipo.type.name}</p>
                    )
                })}
            </div>
            <div>abilities
                {pokemon.abilities.map((habilidades, index) => {
                    return (
                        <p>{habilidades.ability.name}</p>
                    )
                })}
            </div>
            <div>
                Moves
                {pokemon.moves.map((movimientos, index) => {
                    return(
                        <p>{movimientos.move.name}</p>
                        
                    )
                })}
            </div>
            <div>
            <img src={pokemon.sprites.other.dream_world.front_default} height="100" width={100} />
            </div>
        </div>
    )
}
export async function getServerSideProps(context) {

    const { name } = context.query
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
    const pokemon = await res.json()
    return {
        props: {
            pokemon
        }
    }
}