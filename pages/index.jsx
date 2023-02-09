import React, { useEffect, useState } from 'react';
import PokemonCard from '../components/carPokemon';
import { getServerSideProps } from "./api/api"
import Search from '@/components/search';
import LoadMoreButton from '@/components/button';

export default function Home({ arrayPokemon2 }) {
  return (
    <div className="flex-col md:flex w-full p-4" >
      <Search></Search>
      {arrayPokemon2.map((pokemon, index) => {
        return <PokemonCard key={pokemon.id} pokemon={pokemon} />;
      })}
      <LoadMoreButton></LoadMoreButton>
    </div>
  )
}
export { getServerSideProps };