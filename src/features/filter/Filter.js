import React from 'react';
import { useDispatch } from 'react-redux';
import {
  getFilterPokemonsAsync,
  getPokemonsAsync
} from '../pokemons/pokemonsSlice';
export function Filter() {

  const dispatch = useDispatch();

  const searchPokemons = (e)=>{
    e.target.value ? dispatch(getFilterPokemonsAsync(e.target.value)) : dispatch(getPokemonsAsync())
  }

  return (
   <input onChange={(e)=> searchPokemons(e)} type="text"></input>
  );
}
