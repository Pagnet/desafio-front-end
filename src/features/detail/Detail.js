import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectPokemons } from '../pokemons/pokemonsSlice';

export function Detail() {

  const pokemons = useSelector(selectPokemons);
  const [detailPokemon, setDetailPokemon] = useState();

  useEffect(() => {
    //window.location.pathname.replace(/\D/g, '')
    setDetailPokemon(pokemons.state.pokemons);
    console.log(pokemons.state.pokemons.results[0].weight);
  });

  return (
    <>
      <div>{detailPokemon && detailPokemon.name}</div>
      <div>{pokemons.state.pokemons.results[0].weight}</div>
    </>
  );
  
}
