import React from 'react';
import { useDispatch } from 'react-redux';
import './Filter.scss';

import {
  getFilterPokemonsAsync,
  getPokemonsAsync
} from '../pokemons/pokemonsSlice';
export function Filter() {

  const dispatch = useDispatch();

  const searchPokemons = (e) => {
    e.target.value ? dispatch(getFilterPokemonsAsync(e.target.value)) : dispatch(getPokemonsAsync())
  }

  return (
    <div className="filter">
      <input placeholder="digite o nome de um pokemon" onChange={(e) => searchPokemons(e)} type="text"></input>
    </div>
  );
}
