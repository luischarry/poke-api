import React, { useState } from "react";
import Link from "next/link";
const Search = () => {
    const [pokemon, setPokemon] = useState(null);
    const [name, setName] = useState("");
    const [error, setError] = useState(null);
    const handleSubmit = async event => {
        event.preventDefault();
        if (!name) {
            return;
        }
        setError(null)
        try {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
            if (!response.ok) {
                setError("No existen pokémons con ese nombre");
                return;
            }
            const data = await response.json();
            setPokemon(data);
        } catch (error) {
            setError("An error occurred");
        }
    };
    return (
        <div>
            <form onSubmit={handleSubmit} className="text-center">
                <input type="text" value={name} onChange={e => setName(e.target.value)} />
                <button type="submit" className="bg-gray-500 text-white font-bold px-4 rounded hover:bg-yellow-600">Search</button>
            </form>
            {error && (
                <div>{error}</div>
            )}
            {pokemon && (
                <Link href={{
                    pathname: '/pokemon/[name]',
                    query: { name: pokemon.name }
                }}>
                    <div className="flex mt-4 bg-slate-600">
                        <div>
                        <img lassName="mx-auto" src={pokemon.sprites.other.dream_world.front_default}></img>
                        </div>
                        <div className="px-7">
                            <h3 className="text-4xl mb-2 capitalize ">{pokemon.name}</h3>
                            {console.log(pokemon)}
                            <div>
                                <h2 className="text-2xl mt-6 mb-2">Types</h2>
                                {pokemon.types.map((pokemon, index) => (
                                    <div key={index}>
                                        <h4>{pokemon.type.name}</h4>
                                    </div>))}
                            </div>
                        </div>
                    </div>
                </Link>
            )}
        </div>
    );
}
export default Search