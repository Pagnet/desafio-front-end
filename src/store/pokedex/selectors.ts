import { createSelector } from "reselect";

import { PokedexState } from "./types";

export const pokedexSlice = (state): PokedexState => state.pokedex;

export const pokemonList = createSelector(
  pokedexSlice,
  (state: PokedexState) => state.pokemon
);

export const totalPokemonSaved = createSelector(
  pokedexSlice,
  (state: PokedexState) => state.pokemon.length
);
