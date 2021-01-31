import { sanitizePokemonAPI } from "../sanitize-api-response";

describe("sanitizePokemonAPI", () => {
  it("returns a sanitized object from an API response", () => {
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

    const sanitizedObject = {
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
      stats: {
        hp: 70,
        attack: 80,
        defense: 50,
        "special-attack": 35,
        "special-defense": 35,
        speed: 35,
      },
      species: {
        name: "machop",
        url: "https://pokeapi.co/api/v2/pokemon-species/66/",
      },
    };

    expect(sanitizePokemonAPI(mockedApiResponse)).toEqual(sanitizedObject);
  });

  it("returns a sanitized object with empty state when API response does not have the attribute", () => {
    const mockedApiResponse = {
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

      weight: 195,
    };

    const sanitizedObject = {
      name: "machop",
      id: 66,
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/66.png",
      weight: 195,
      height: 8,
      types: [],
      abilities: [],
      stats: {},
      species: {
        name: "machop",
        url: "https://pokeapi.co/api/v2/pokemon-species/66/",
      },
    };

    expect(sanitizePokemonAPI(mockedApiResponse)).toEqual(sanitizedObject);
  });
});
