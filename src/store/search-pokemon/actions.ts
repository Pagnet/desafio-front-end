import { createAction } from "../utils/action-creator";

import { PokemonType } from "./types";

export enum SEARCH_POKEMON {
  REQUEST = "searchPokemon/SEARCH_REQUEST",
  RESOLVE = "searchPokemon/SEARCH_RESOLVE",
  FAIL = "searchPokemon/SEARCH_FAIL",
  CLEAR = "searchPokemon/SEARCH_CLEAR",
}

export const searchPokemonRequest = createAction<string>(
  SEARCH_POKEMON.REQUEST
);

export const searchPokemonResolve = createAction<PokemonType>(
  SEARCH_POKEMON.RESOLVE
);

export const searchPokemonFail = createAction<string>(SEARCH_POKEMON.FAIL);

export const searchPokemonClear = createAction(SEARCH_POKEMON.CLEAR);

const action = {
  searchPokemonRequest,
  searchPokemonResolve,
  searchPokemonFail,
  searchPokemonClear,
};

export default action;
