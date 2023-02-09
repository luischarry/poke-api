import React, { useState } from 'react';

function LoadMoreButton() {
  const [offset, setOffset] = useState(0);

  const handleClick = async () => {
    setOffset(offset + 20);

    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=20`);
      const data = await response.json();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <button onClick={handleClick}>Cargar más</button>
  );
}

export default LoadMoreButton;