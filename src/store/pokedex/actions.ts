import { createAction } from "../utils/action-creator";
import type { Pokemon } from "./types";

export enum POKEDEX {
  SAVE = "pokedex/SAVE",
  REMOVE = "pokedex/REMOVE",
}

export const pokedexSavePokemon = createAction<Pokemon>(POKEDEX.SAVE);
export const pokedexRemovePokemon = createAction<number>(POKEDEX.REMOVE);

const action = {
  pokedexSavePokemon,
  pokedexRemovePokemon,
};

export default action;
