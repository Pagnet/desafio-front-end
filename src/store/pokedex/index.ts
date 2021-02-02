import reducer from "./reducers";
import * as pokedexSelectors from "./selectors";

export { default as pokedexActions } from "./actions";
export { pokedexSelectors };

export type { PokemonPokedex, PokedexState } from "./types";
export default reducer;
