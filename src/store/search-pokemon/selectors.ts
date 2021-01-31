import { createSelector } from "reselect";

import { SearchPokemonState } from "./types";

export const searchPokemonSlice = (state): SearchPokemonState =>
  state.searchPokemon;

export const isLoading = createSelector(
  searchPokemonSlice,
  (state: SearchPokemonState) => state.loading
);

export const hasError = createSelector(
  searchPokemonSlice,
  (state: SearchPokemonState) => Boolean(state.error)
);

export const pokemonFound = createSelector(
  searchPokemonSlice,
  (state: SearchPokemonState) => state.pokemonFound
);
