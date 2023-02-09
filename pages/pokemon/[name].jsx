import React, { useState, useEffect } from "react";
import Link from "next/link";

export default function Pokemon({ pokemon }) {
    const [meal, setMeal] = useState(null);
    useEffect(() => {
        (async function () {
            const response = await fetch("https://www.themealdb.com/api/json/v1/1/random.php");
            const data = await response.json();
            setMeal(data.meals[0]);
        })();
    }, []);
    if (!meal) {
        return <div>Cargando...</div>;
    }
    return (
        <div>
            <Link href={"/"}>Volver</Link>
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
                    return (
                        <p>{movimientos.move.name}</p>

                    )
                })}
            </div>
            <div>
                <img src={pokemon.sprites.other.dream_world.front_default} height="100" width={100} />
            </div>
            <div>
                <h1>{meal.strMeal}</h1>
                <img src={meal.strMealThumb} alt={meal.strMeal} />
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