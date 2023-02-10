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
        'border border-white p-2 w-1/3 ',
        {
          'bg-red-500 ': typeClass === 'fire',
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
        <div >
          <h3 className=" mb-2 text-center capitalize ">{pokemon.name}</h3>
          <div style={{ backgroundImage: `url(https://png.pngtree.com/thumb_back/fw800/background/20210225/pngtree-yellow-lightning-sunburst-ray-wallpaper-image_564123.jpg)`, }}>
          <img src={pokemon.image} className="mx-auto" />
          </div>
          <div>
            <ul className='list-disc'><h2 className="text-2xl mt-6 mb-2 bg-gray-700 text-white rounded-full w-87 text-center py-2">Types</h2></ul>
            {pokemon.types.map((tipo, index) => {
              return <li className="ml-2 text-left"key={index}>{tipo.type.name}</li>;
            })}
          </div>

        </div>
      </Link>
    </div>
  );
};

export default PokemonCard;