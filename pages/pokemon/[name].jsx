import React, { useState, useEffect } from "react";
import Link from "next/link";
import Layout from '../../components/Layout';
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
        <Layout>
            <Link href={"/"} className="bg-gray-500 text-white font-bold px-4 rounded hover:bg-yellow-600">
                Home
            </Link>
            <div >
                <div className="flex flex-col sm:flex-row">

                    <div className="inline-block border-2 border-yellow-500 rounded-lg shadow-2xl w-full md:w-1/2 p-4 bg-amber-200">
                        <h1 className="text-2x2 mb-2  capitalize">#{pokemon.id}.{pokemon.name}</h1>
                        <div>
                            <img className={`mx-auto ${pokemon.types[0].type.name === 'fire' ? 'bg-red-400' : pokemon.types[0].type.name === 'water' ? 'bg-blue-400' : pokemon.types[0].type.name === 'grass' ? 'bg-green-400' : pokemon.types[0].type.name === 'electric' ? 'bg-yellow-400' : 'bg-gray-400'}`} src={pokemon.sprites.other.dream_world.front_default} alt={pokemon.name} />
                        </div>
                        <div className="contents rounded-lg">
                            <div className="border-b border-black" >
                                <p>
                                    <span className="font-bold mr-2  ">Weight:</span> {pokemon.weight}
                                </p>
                                <p >
                                    <span className=" font-bold mr-2">Height:</span>
                                    {pokemon.height}
                                </p>
                            </div>
                            <div className="border-b border-black">
                                <p className="  font-bold mr-2 ">Types:</p>
                                {pokemon.types.map((type, index) => (
                                    <span key="index">{type.type.name}</span>
                                ))}
                            </div>
                            <div><p className=" font-bold mr-2 ">abilities</p>
                                {pokemon.abilities.map((habilidades, index) => {
                                    return (
                                        <p>{habilidades.ability.name}</p>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                    <div className="text-white ml-10 inline-block border-2 border-black rounded-lg shadow-2xl bg-cover bg-center w-full md:w-1/2 p-4" style={{ backgroundImage: `url(https://media.istockphoto.com/id/1145602814/es/foto/textura-de-madera-natural.jpg?b=1&s=612x612&w=0&k=20&c=UZ04Dlqeerfw1Q5jAVs1Wlf8xHFTxDym_wUOR8CIBr0=)`, }}>
                        <div >
                            <h5 className="mb-2 text-center capitalize">his favorite food:{meal.strMeal}</h5>
                        </div >
                        <img className="w-3/4 h-32 mx-auto" src={meal.strMealThumb} alt={meal.strMeal} />
                        <div className="text-center">
                            <ul className="list-disc pl-5">
                                <h5 className="font-bold mr-2">Ingredients</h5>
                                <li className="ml-2 text-left">{meal.strIngredient1}</li>
                                <li className="ml-2 text-left">{meal.strIngredient2}</li>
                                <li className="ml-2 text-left">{meal.strIngredient3}</li>
                                <li className="ml-2 text-left">{meal.strIngredient4}</li>
                            </ul>
                        </div>

                    </div>
                </div>



            </div>
        </Layout>
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