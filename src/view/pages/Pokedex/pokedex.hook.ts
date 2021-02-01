import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { pokedexSelectors, pokedexActions } from "../../../store/pokedex";
import type { Pokemon } from "../../../store/pokedex";

import { ROUTES } from "../../../constants";

type usePokedexHookType = {
  pokemonList: Pokemon[];
  hasPokemon: boolean;
  handleNavigationButtonPress: () => void;
  handleRemoveButtonPress: (id: number) => void;
  handleSeeMoreButtonPress: (name: string) => void;
};

const usePokedexHook = (): usePokedexHookType => {
  const dispatch = useDispatch();
  const history = useHistory();

  const pokemonList = useSelector(pokedexSelectors.pokemonList);
  const totalPokemonSaved = useSelector(pokedexSelectors.totalPokemonSaved);

  const hasPokemon = totalPokemonSaved > 0;

  function handleNavigationButtonPress() {
    history.push(ROUTES.SEARCH);
  }

  function handleRemoveButtonPress(id: number) {
    dispatch(pokedexActions.pokedexRemovePokemon(id));
  }

  function handleSeeMoreButtonPress(name: string) {
    history.push({
      pathname: `${ROUTES.INFOS}${name}`,
    });
  }

  return {
    pokemonList,
    hasPokemon,
    handleNavigationButtonPress,
    handleRemoveButtonPress,
    handleSeeMoreButtonPress,
  };
};

export default usePokedexHook;
