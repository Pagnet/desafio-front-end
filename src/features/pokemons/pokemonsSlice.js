import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const pokemonsSlice = createSlice({
  name: 'pokemons',
  initialState: {
    pokemons: {}
  },
  reducers: {
    setPokemons: (state, action) => {
      state.pokemons = action.payload;
    },
    setPokemonsFilter: (state, action) => {
      state.pokemons.results = action.payload;
    },
  },
});

export const { setPokemons, setPokemonsFilter } = pokemonsSlice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
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

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectPokemons = state => state;

export default pokemonsSlice.reducer;
