import React, { useState } from "react";
import PokemonCard from "../components/carPokemon";
import { getServerSideProps } from "./api/api";
import Search from "@/components/search";
import Layout from "@/components/layout";

export default function Home({ arrayPokemon2, page, limit }) {
  

  return (
    <Layout>
    <div >
      <Search></Search>
      <div className="flex flex-wrap p-2">
      {arrayPokemon2.map((pokemon, index) => {
        return <PokemonCard key={pokemon.id} pokemon={pokemon} />;
      })}
      </div>
      
    </div></Layout>
  );
}

export { getServerSideProps };

