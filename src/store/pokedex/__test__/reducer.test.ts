import reducer from "../reducers";
import actions from "../actions";
import { mockComponent } from "react-dom/test-utils";

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

describe("Pokedex reducer", () => {
  it("adds a new pokémon when it isn't already added", () => {
    const initialState = { ...reducer(undefined, { type: "" }) };
    const finalState = reducer(
      initialState,
      actions.pokedexSavePokemon(pokemonMock)
    );

    const expectedState = {
      pokemon: [pokemonMock],
    };

    expect(finalState).toEqual(expectedState);
  });

  it("does not add a new pokémon when it is already added", () => {
    const initialState = {
      ...reducer({ pokemon: [pokemonMock] }, { type: "" }),
    };
    const finalState = reducer(
      initialState,
      actions.pokedexSavePokemon(pokemonMock)
    );

    const expectedState = {
      pokemon: [pokemonMock],
    };

    expect(finalState).toEqual(expectedState);
  });

  it("removes pokémon from state", () => {
    const initialState = {
      ...reducer({ pokemon: [pokemonMock] }, { type: "" }),
    };
    const finalState = reducer(initialState, actions.pokedexRemovePokemon(6));

    const expectedState = {
      pokemon: [],
    };

    expect(finalState).toEqual(expectedState);
  });

  it("does not removes pokémon from state if given id is not on the list", () => {
    const initialState = {
      ...reducer({ pokemon: [pokemonMock] }, { type: "" }),
    };
    const finalState = reducer(initialState, actions.pokedexRemovePokemon(8));

    const expectedState = {
      pokemon: [pokemonMock],
    };

    expect(finalState).toEqual(expectedState);
  });
});
