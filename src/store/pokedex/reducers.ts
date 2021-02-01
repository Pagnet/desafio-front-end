import { PokedexState } from "./types";
import { ActionReturn } from "../utils/action-creator";

import { POKEDEX } from "./actions";

const initialState: PokedexState = {
  pokemon: [],
};

function pokedexReducer(state = initialState, action: ActionReturn<any>) {
  const { type, payload } = action;
  switch (type) {
    case POKEDEX.SAVE:
      const alreadySaved = state.pokemon.find((poke) => poke.id === payload.id);
      return alreadySaved
        ? state
        : { ...state, pokemon: [...state.pokemon, payload] };

    case POKEDEX.REMOVE:
      const updatedList = state.pokemon.filter((poke) => poke.id !== payload);
      return { ...state, pokemon: updatedList };

    default:
      return state;
  }
}

export default pokedexReducer;
