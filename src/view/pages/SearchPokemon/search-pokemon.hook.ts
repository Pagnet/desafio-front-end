import { SyntheticEvent, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import {
  searchPokemonActions,
  searchPokemonSelectors,
} from "../../../store/search-pokemon";
import { pokedexActions } from "../../../store/pokedex";
import { ROUTES } from "../../../constants";

type useSearchPokemonHookType = {
  searchInputValue: string;
  isLoading: boolean;
  hasError: boolean;
  pokemonFound: any | null;
  handleSearchInputChange: (e: SyntheticEvent) => void;
  handleClearButtonPress: () => void;
  handleGoButtonPress: () => void;
  handleSaveButtonPress: () => void;
  handleSeeMoreButtonPress: (name: string) => void;
};

const useSearchPokemonHook = (): useSearchPokemonHookType => {
  const [searchInputValue, setSearchInputValue] = useState<string>("");

  const history = useHistory();

  const dispatch = useDispatch();
  const isLoading = useSelector(searchPokemonSelectors.isLoading);
  const hasError = useSelector(searchPokemonSelectors.hasError);
  const pokemonFound = useSelector(searchPokemonSelectors.pokemonFound);

  useEffect(() => {
    return function cleanup() {
      dispatch(searchPokemonActions.searchPokemonClear());
    };
  }, []);

  function handleSearchInputChange(e: SyntheticEvent) {
    const { value } = e.target as HTMLInputElement;
    setSearchInputValue(value);
  }

  function handleClearButtonPress() {
    setSearchInputValue("");
    dispatch(searchPokemonActions.searchPokemonClear());
  }

  function handleGoButtonPress() {
    dispatch(searchPokemonActions.searchPokemonRequest(searchInputValue));
  }

  function handleSaveButtonPress() {
    if (pokemonFound) {
      dispatch(pokedexActions.pokedexSavePokemon(pokemonFound));
    }
  }

  function handleSeeMoreButtonPress(name: string) {
    history.push({
      pathname: `${ROUTES.INFOS}${name}`,
    });
  }
  return {
    searchInputValue,
    isLoading,
    hasError,
    pokemonFound,
    handleSearchInputChange,
    handleClearButtonPress,
    handleGoButtonPress,
    handleSaveButtonPress,
    handleSeeMoreButtonPress,
  };
};

export default useSearchPokemonHook;
