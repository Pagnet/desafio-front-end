import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectPokemons } from '../pokemons/pokemonsSlice';
import './Detail.scss';
import { Stats } from "./stats/Stats";

export function Detail() {

  const pokemons = useSelector(selectPokemons);
  const [detailPokemon, setDetailPokemon] = useState();

  useEffect(() => {
    //window.location.pathname.replace(/\D/g, '')
    setDetailPokemon(pokemons.state.pokemons);
  }, []);

  return (
    <div className="detail-global">
      <div className="detail">
        <div className="pictures">
          <div><img alt="Back" src={pokemons.state.pokemons.results[0].sprites.back_default} /></div>
          <div><img alt="Back Shiny" src={pokemons.state.pokemons.results[0].sprites.back_shiny} /></div>
          <div><img alt="Front Default" src={pokemons.state.pokemons.results[0].sprites.front_default} /></div>
          <div><img alt="Front Shiny Default" src={pokemons.state.pokemons.results[0].sprites.front_shiny} /></div>
        </div>
        <div>{detailPokemon && detailPokemon.name}</div>
        <div><h2>Weight: {pokemons.state.pokemons.results[0].weight}</h2></div>
        <div><h2>Height: {pokemons.state.pokemons.results[0].height}</h2></div>
        <div><h2>Abilities: {pokemons.state.pokemons.results[0].abilities.map((value, i) => value.ability.name + ', ')}</h2></div>
        <Stats data={pokemons.state.pokemons.results[0].stats}></Stats>
      </div>
    </div>
  );

}
