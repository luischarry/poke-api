import React, { useEffect, useState } from 'react';
import Link from "next/link"
import { bringpokemon } from "./api/api"
import Search from '@/components/search';

export default function Home({ arrayPokemon2 }) {
  
  return (
    <div className="flex-col md:flex w-full p-4" >
      <Search></Search>
      
      {arrayPokemon2.map((pokemon, index) => {
        return (
          <div className="border border-white p-2 w-1/3 bg-lime-700">
            <Link href={{
              pathname: '/pokemon/[name]',
              query: { name: pokemon.name }
            }}>
              <div className="">
                <div >
                  <h3 className="text-lg font-bold">
                    {pokemon.name}
                  </h3>
                  <div >
                    {pokemon.types.map((tipo, index) => {
                      return (
                        <p className="mt-4 font-bold">{tipo.type.name}</p>
                      )
                    })}
                  </div>
                  <img src={pokemon.image} className=" h-32 object-cover mb-4" />
                </div>
              </div>
            </Link>
          </div>
        )
      })
      }

    </div>
  )
}
export async function getServerSideProps() {
  let arrayPokemon = []
  for (let i = 1; i <= 20; i++) {
    let data = await bringpokemon(i)
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