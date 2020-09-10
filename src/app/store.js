import { configureStore } from '@reduxjs/toolkit';
import selectPokemons from '../features/pokemons/pokemonsSlice';

export default configureStore({
  reducer: {
    state: selectPokemons,
  },
});
