import React from 'react';
import Link from 'next/link';
import classNames from 'classNames';
const PokemonCard = ({ pokemon }) => {
    let typeClass = '';
    if (pokemon.types.length > 0) {
      typeClass = pokemon.types[0].type.name;
    }
  
    return (
      <div
        className={classNames(
          'border border-white p-2 w-1/3',
          {
            'bg-red-500': typeClass === 'fire',
            'bg-blue-500': typeClass === 'water',
            'bg-green-500': typeClass === 'grass',
            'bg-yellow-500': typeClass === 'electric',
          }
        )}
      >
        <Link
          href={{
            pathname: '/pokemon/[name]',
            query: { name: pokemon.name }
          }}
        >
          <div>
            <h3 className="text-lg font-bold">{pokemon.name}</h3>
            <div>
              {pokemon.types.map((tipo, index) => {
                return <p className="mt-4 font-bold">{tipo.type.name}</p>;
              })}
            </div>
            <img src={pokemon.image} className="h-32 object-cover mb-4" />
          </div>
        </Link>
      </div>
    );
  };
  
  export default PokemonCard;