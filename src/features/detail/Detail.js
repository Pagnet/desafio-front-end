import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectPokemons } from '../pokemons/pokemonsSlice';

export function Detail() {

  const pokemons = useSelector(selectPokemons);
  const [detailPokemon, setDetailPokemon] = useState();

  useEffect(() => {
    //window.location.pathname.replace(/\D/g, '')
    setDetailPokemon(pokemons.state.pokemons);
  });

  return (
    <>
      <div>{detailPokemon && detailPokemon.name}</div>
      <div>Weight: {pokemons.state.pokemons.results[0].weight}</div>
      <div>Height: {pokemons.state.pokemons.results[0].height}</div>
      <div><img alt="Abilitie" src={pokemons.state.pokemons.results[0].sprites.back_default} /></div>
      <div><img alt="Abilitie" src={pokemons.state.pokemons.results[0].sprites.back_shiny} /></div>
      <div><img alt="Abilitie" src={pokemons.state.pokemons.results[0].sprites.front_default} /></div>
      <div><img alt="Abilitie" src={pokemons.state.pokemons.results[0].sprites.front_shiny} /></div>
    </>
  );
  
}
