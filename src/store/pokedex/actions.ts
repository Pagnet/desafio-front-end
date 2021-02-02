import { createAction } from "../utils/action-creator";
import type { PokemonPokedex } from "./types";

export enum POKEDEX {
  SAVE = "pokedex/SAVE",
  REMOVE = "pokedex/REMOVE",
}

export const pokedexSavePokemon = createAction<PokemonPokedex>(POKEDEX.SAVE);
export const pokedexRemovePokemon = createAction<number>(POKEDEX.REMOVE);

const action = {
  pokedexSavePokemon,
  pokedexRemovePokemon,
};

export default action;
