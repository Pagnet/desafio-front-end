import * as selectors from "../selectors";

const mockedPokemon = {
  name: "charizard",
  id: 6,
  image:
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png",
  weight: 905,
  height: 17,
  types: [
    {
      name: "fire",
      url: "https://pokeapi.co/api/v2/type/10/",
    },
    {
      name: "flying",
      url: "https://pokeapi.co/api/v2/type/3/",
    },
  ],
  abilities: [
    {
      name: "blaze",
      url: "https://pokeapi.co/api/v2/ability/66/",
    },
    {
      name: "solar-power",
      url: "https://pokeapi.co/api/v2/ability/94/",
    },
  ],
  stats: [
    {
      baseStat: 78,
      name: "hp",
    },
    {
      baseStat: 84,
      name: "attack",
    },
    {
      baseStat: 78,
      name: "defense",
    },
    {
      baseStat: 109,
      name: "special-attack",
    },
    {
      baseStat: 85,
      name: "special-defense",
    },
    {
      baseStat: 100,
      name: "speed",
    },
  ],
  species: {
    name: "charizard",
    url: "https://pokeapi.co/api/v2/pokemon-species/6/",
  },
};

const searchPokemonSlice = {
  loading: false,
  error: null,
  pokemonFound: mockedPokemon,
};

const mockedState = {
  searchPokemon: searchPokemonSlice,
  pokedex: {
    pokemon: [],
  },
  pokemonInfos: {
    loading: false,
    error: null,
    pokemon: null,
  },
};

describe("search pokemon selectors", () => {
  it("returns searchPokemon state slice", () => {
    expect(selectors.searchPokemonSlice(mockedState)).toEqual(
      searchPokemonSlice
    );
  });

  it("returns isLoading true when loading state is true", () => {
    const sliceWithLoadingTrue = {
      ...searchPokemonSlice,
      loading: true,
    };

    const state = { ...mockedState, searchPokemon: sliceWithLoadingTrue };

    expect(selectors.isLoading(state)).toBe(true);
  });

  it("returns isLoading false when loading state is false", () => {
    const sliceWithLoadingFalse = {
      ...searchPokemonSlice,
      loading: false,
    };

    const state = { ...mockedState, searchPokemon: sliceWithLoadingFalse };

    expect(selectors.isLoading(state)).toBe(false);
  });

  it("returns hasError true when error state is true", () => {
    const sliceWithErrorTrue = {
      ...searchPokemonSlice,
      error: true,
    };

    const state = { ...mockedState, searchPokemon: sliceWithErrorTrue };

    expect(selectors.hasError(state)).toBe(true);
  });

  it("returns hasError false when error state is false", () => {
    const sliceWithErrorFalse = {
      ...searchPokemonSlice,
      error: false,
    };

    const state = { ...mockedState, searchPokemon: sliceWithErrorFalse };

    expect(selectors.hasError(state)).toBe(false);
  });

  it("returns pokemonFound state", () => {
    expect(selectors.pokemonFound(mockedState)).toEqual(mockedPokemon);
  });
});
