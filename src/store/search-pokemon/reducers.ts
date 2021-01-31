import { SearchPokemonState } from "./types";
import { ActionReturn } from "../utils/action-creator";

import { SEARCH_POKEMON } from "./actions";

const initialState: SearchPokemonState = {
  loading: false,
  error: null,
  pokemonFound: null,
};

function searchPokemonReducer(state = initialState, action: ActionReturn<any>) {
  const { type, payload } = action;
  switch (type) {
    case SEARCH_POKEMON.REQUEST:
      return { ...state, loading: true, error: null, pokemonFound: null };

    case SEARCH_POKEMON.RESOLVE:
      return { ...state, loading: false, error: null, pokemonFound: payload };

    case SEARCH_POKEMON.FAIL:
      return { ...state, loading: false, error: payload, pokemonFound: null };

    case SEARCH_POKEMON.CLEAR:
      return { ...state, loading: false, error: null, pokemonFound: null };

    default:
      return state;
  }
}

export default searchPokemonReducer;
