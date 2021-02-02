import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  searchPokemonActions,
  searchPokemonSelectors,
} from "../../../store/search-pokemon";

import request from "../../../services/requests";

type EvolutionChain = {
  species: string;
  evolvesTo: EvolutionChain[][] | null;
};

export type PokemonByType = { pokemon: { name: string; url: string } };

export interface PokemonListByTypeState {
  loading: boolean;
  error: boolean;
  pokemonList: PokemonByType[];
}

export interface PokemonAbilityState {
  loading: boolean;
  error: boolean;
  shortEffect: string;
}

export interface PokemonEvolutionState {
  loading: boolean;
  error: boolean;
  evolutionChain: EvolutionChain[];
  requestEvolutionChain: () => void;
}

interface usePokemonInfosHookType {
  isLoading: boolean;
  hasError: boolean;
  pokemon: any;
  pokemonListByType: PokemonListByTypeState;
  pokemonAbilityState: PokemonAbilityState;
  pokemonEvolutionState: PokemonEvolutionState;
  handleTryAgainButton: () => void;
  requestPokemonByType: (url: string | undefined) => void;
  requestAbilityShortEffect: (url: string | undefined) => void;
}

const usePokemonInfosHook = (name?: string): usePokemonInfosHookType => {
  const [loadingTypes, setLoadingTypes] = useState(false);
  const [hasErrorTypes, setHasErroTypes] = useState(false);
  const [pokemonByType, setPokemonByType] = useState([]);

  const [loadingAbility, setLoadingAbility] = useState(false);
  const [hasErrorAbility, setHasErroAbility] = useState(false);
  const [abilityShortEffect, setAbilityShortEffect] = useState("");

  const [loadingEvolution, setLoadingEvolution] = useState(false);
  const [hasErrorEvolution, setHasErroEvolution] = useState(false);
  const [evolutionChain, setEvolutionChain] = useState<EvolutionChain[]>([]);

  const dispatch = useDispatch();

  const pokemon = useSelector(searchPokemonSelectors.pokemonFound);
  const isLoading = useSelector(searchPokemonSelectors.isLoading);
  const hasError = useSelector(searchPokemonSelectors.hasError);

  const pokemonListByType = {
    loading: loadingTypes,
    error: hasErrorTypes,
    pokemonList: pokemonByType,
  };

  const pokemonAbilityState = {
    loading: loadingAbility,
    error: hasErrorAbility,
    shortEffect: abilityShortEffect,
  };

  const pokemonEvolutionState = {
    loading: loadingEvolution,
    error: hasErrorEvolution,
    evolutionChain,
    requestEvolutionChain: requestEvolution,
  };

  useEffect(() => {
    requestPokemonInformation();
  }, []);

  useEffect(() => {
    requestEvolution();
  }, [pokemon]);

  function requestPokemonInformation() {
    dispatch(searchPokemonActions.searchPokemonRequest(name));
  }

  function handleTryAgainButton() {
    requestPokemonInformation();
  }

  async function requestPokemonByType(url) {
    setLoadingTypes(true);
    setHasErroTypes(false);

    try {
      const response = await request(url);
      setLoadingTypes(false);
      setHasErroTypes(false);
      const { pokemon } = response;
      setPokemonByType(pokemon);
    } catch (e) {
      setLoadingTypes(false);
      setHasErroTypes(true);
    }
  }

  async function requestAbilityShortEffect(url) {
    setLoadingAbility(true);
    setHasErroAbility(false);
    try {
      const response = await request(url);
      setLoadingAbility(false);
      setHasErroAbility(false);
      const { effect_entries } = response;
      const ability = effect_entries.find((e) => {
        return e.language.name === "en";
      });
      setAbilityShortEffect(ability.short_effect);
    } catch (e) {
      setLoadingAbility(false);
      setHasErroTypes(true);
    }
  }

  function returnEvolution(chain): EvolutionChain[] {
    return [
      {
        species: chain.species?.name,
        evolvesTo:
          chain.evolves_to?.length > 0
            ? chain.evolves_to.map((a) => returnEvolution(a))
            : null,
      },
    ];
  }

  async function requestEvolution() {
    if (!pokemon) return;
    setLoadingEvolution(true);
    setHasErroEvolution(false);
    try {
      const r = await request(pokemon.species.url);
      const { evolution_chain } = r;
      const { chain } = await request(evolution_chain.url);
      const eevee = returnEvolution(chain);
      setEvolutionChain(eevee);
      setLoadingEvolution(false);
      setHasErroEvolution(false);
    } catch (error) {
      setLoadingEvolution(false);
      setHasErroEvolution(true);
    }
  }

  return {
    isLoading,
    hasError,
    pokemon,
    pokemonListByType,
    pokemonAbilityState,
    pokemonEvolutionState,
    handleTryAgainButton,
    requestPokemonByType,
    requestAbilityShortEffect,
  };
};

export default usePokemonInfosHook;
