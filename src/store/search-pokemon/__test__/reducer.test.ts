import reducer from "../reducers";
import actions from "../actions";

const pokemonMock = {
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

describe("search pokemon reducer", () => {
  test("changes loading to true and error and pokemonFound to null when request search pokemon", () => {
    const initialState = { ...reducer(undefined, { type: "" }) };
    const finalState = reducer(initialState, actions.searchPokemonRequest());

    const expectedState = {
      loading: true,
      error: null,
      pokemonFound: null,
    };

    expect(finalState).toEqual(expectedState);
  });

  test("changes loading to false and error to null and pokemonFound with payload value when request is resolved", () => {
    const initialState = { ...reducer(undefined, { type: "" }) };
    const finalState = reducer(
      initialState,
      actions.searchPokemonResolve(pokemonMock)
    );

    const expectedState = {
      loading: false,
      error: null,
      pokemonFound: pokemonMock,
    };

    expect(finalState).toEqual(expectedState);
  });

  test("changes loading to false and error with payload value and pokemonFound to null when request fails", () => {
    const initialState = { ...reducer(undefined, { type: "" }) };
    const finalState = reducer(
      initialState,
      actions.searchPokemonFail("Not Found")
    );

    const expectedState = {
      loading: false,
      error: "Not Found",
      pokemonFound: null,
    };

    expect(finalState).toEqual(expectedState);
  });

  test("changes to iniital state when clear action is called", () => {
    const initialState = { ...reducer(undefined, { type: "" }) };
    const finalState = reducer(initialState, actions.searchPokemonClear());

    const expectedState = {
      loading: false,
      error: null,
      pokemonFound: null,
    };

    expect(finalState).toEqual(expectedState);
  });
});
