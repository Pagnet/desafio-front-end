import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const pokemonsSlice = createSlice({
  name: 'pokemons',
  initialState: {
    pokemons: {},
    pokedex: []
  },
  reducers: {
    setPokemons: (state, action) => {
      state.pokedex = action;
    },
    setPokemonsFilter: (state, action) => {
      state.pokemons.results = action.payload;
    }
  },
});

export const { setPokemons, setPokemonsFilter, setPokemonsPokedex } = pokemonsSlice.actions;

export const getPokemonsAsync = () => dispatch => {

  axios.get(`https://pokeapi.co/api/v2/pokemon/`)
    .then(res => {
      dispatch(setPokemons(res.data));
    })


};


export const getFilterPokemonsAsync = value => dispatch => {

  if (!value) {
    dispatch(setPokemonsFilter([]));
  } else {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${value}`)
      .then(res => {
        dispatch(setPokemonsFilter([res.data]));
      })
  }


};

export const selectPokemons = state => state;

export default pokemonsSlice.reducer;
