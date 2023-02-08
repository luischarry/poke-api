import React, { useState, useEffect } from "react";
import Link from "next/link";
const Search = () => {
    const [pokemon, setPokemon] = useState(null);
    const [name, setName] = useState("");
    useEffect(() => {
        if (name == "") {
            console.log("aqui entra");
        }
    });
    const handleSubmit = async event => {
        event.preventDefault();
        try {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
            const data = await response.json();
            setPokemon(data);
        } catch (error) {
            console.error(error);
        }
    };
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" value={name} onChange={e => setName(e.target.value)} />
                <button type="submit">Search</button>
            </form>
            {pokemon && (
                <Link href={{
                    pathname: '/pokemon/[name]',
                    query: { name: pokemon.name }
                }}>
                    <div>
                        <h2>{pokemon.name}</h2>
                        <p>Weight: {pokemon.weight}</p>
                        <p>Height: {pokemon.height}</p>
                        <img src={pokemon.sprites.other.dream_world.front_default}></img>
                    </div>
                </Link>
            )}
        </div>
    );
}
export default Search