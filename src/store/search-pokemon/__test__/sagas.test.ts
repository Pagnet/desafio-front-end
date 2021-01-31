import { put } from "redux-saga/effects";

import actions from "../actions";
import { handleSearchPokemonRequest } from "../sagas";
import request from "../../../services/requests";

const mockedApiResponse = {
  abilities: [
    {
      ability: {
        name: "guts",
        url: "https://pokeapi.co/api/v2/ability/62/",
      },
      is_hidden: false,
      slot: 1,
    },
    {
      ability: {
        name: "no-guard",
        url: "https://pokeapi.co/api/v2/ability/99/",
      },
      is_hidden: false,
      slot: 2,
    },
    {
      ability: {
        name: "steadfast",
        url: "https://pokeapi.co/api/v2/ability/80/",
      },
      is_hidden: true,
      slot: 3,
    },
  ],

  height: 8,

  id: 66,

  name: "machop",

  species: {
    name: "machop",
    url: "https://pokeapi.co/api/v2/pokemon-species/66/",
  },
  sprites: {
    front_default:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/66.png",
  },

  stats: [
    {
      base_stat: 70,
      effort: 0,
      stat: {
        name: "hp",
        url: "https://pokeapi.co/api/v2/stat/1/",
      },
    },
    {
      base_stat: 80,
      effort: 1,
      stat: {
        name: "attack",
        url: "https://pokeapi.co/api/v2/stat/2/",
      },
    },
    {
      base_stat: 50,
      effort: 0,
      stat: {
        name: "defense",
        url: "https://pokeapi.co/api/v2/stat/3/",
      },
    },
    {
      base_stat: 35,
      effort: 0,
      stat: {
        name: "special-attack",
        url: "https://pokeapi.co/api/v2/stat/4/",
      },
    },
    {
      base_stat: 35,
      effort: 0,
      stat: {
        name: "special-defense",
        url: "https://pokeapi.co/api/v2/stat/5/",
      },
    },
    {
      base_stat: 35,
      effort: 0,
      stat: {
        name: "speed",
        url: "https://pokeapi.co/api/v2/stat/6/",
      },
    },
  ],
  types: [
    {
      slot: 1,
      type: {
        name: "fighting",
        url: "https://pokeapi.co/api/v2/type/2/",
      },
    },
  ],
  weight: 195,
};

const mockedPokemon = {
  name: "machop",
  id: 66,
  image:
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/66.png",
  weight: 195,
  height: 8,
  types: [
    {
      name: "fighting",
      url: "https://pokeapi.co/api/v2/type/2/",
    },
  ],
  abilities: [
    {
      name: "guts",
      url: "https://pokeapi.co/api/v2/ability/62/",
    },
    {
      name: "no-guard",
      url: "https://pokeapi.co/api/v2/ability/99/",
    },
    {
      name: "steadfast",
      url: "https://pokeapi.co/api/v2/ability/80/",
    },
  ],
  stats: [
    {
      baseStat: 70,
      name: "hp",
    },
    {
      baseStat: 80,
      name: "attack",
    },
    {
      baseStat: 50,
      name: "defense",
    },
    {
      baseStat: 35,
      name: "special-attack",
    },
    {
      baseStat: 35,
      name: "special-defense",
    },
    {
      baseStat: 35,
      name: "speed",
    },
  ],
  species: {
    name: "machop",
    url: "https://pokeapi.co/api/v2/pokemon-species/66/",
  },
};

describe("search pokemon saga", () => {
  describe("handleSearchPokemonRequest when it succeeds", () => {
    const action = {
      payload: "Charizard",
    };

    const gen = handleSearchPokemonRequest(action);

    it("requests pokeapi endpoint", () => {
      const value = gen.next().value as any;

      expect(value.type).toEqual("CALL");
      expect(value.payload.fn).toEqual(request);
      expect(value.payload.args).toEqual([
        "https://pokeapi.co/api/v2/pokemon/charizard/",
      ]);
    });

    it("calls search resolve action passing payload", () => {
      expect(gen.next(mockedApiResponse).value).toEqual(
        put(actions.searchPokemonResolve(mockedPokemon))
      );
    });

    it("finishes", () => {
      expect(gen.next().done).toBeTruthy();
    });
  });

  describe("handleSearchPokemonRequest when it fails", () => {
    const action = {
      payload: "Digimon",
    };

    const gen = handleSearchPokemonRequest(action);

    it("requests pokeapi endpoint", () => {
      const value = gen.next().value as any;

      expect(value.type).toEqual("CALL");
      expect(value.payload.fn).toEqual(request);
      expect(value.payload.args).toEqual([
        "https://pokeapi.co/api/v2/pokemon/digimon/",
      ]);
    });

    it("calls search resolve action passing payload", () => {
      const mockedResponseError = new Error("Not Found");
      expect(gen.throw(mockedResponseError).value).toEqual(
        put(actions.searchPokemonFail("Not Found"))
      );
    });

    it("finishes", () => {
      expect(gen.next().done).toBeTruthy();
    });
  });
});
