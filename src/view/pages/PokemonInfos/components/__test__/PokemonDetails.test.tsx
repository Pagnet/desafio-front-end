import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import PokemonDetails from "../PokemonDetails";

const defaultProps = {
  "data-testid": "pokemonInfos.details",
  pokemon: {
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
  },
  pokemonAbilityState: {
    loading: false,
    error: false,
    shortEffect: "",
  },
  pokemonListByType: {
    loading: false,
    error: false,
    pokemonList: [],
  },
  pokemonEvolutionState: {
    loading: false,
    error: false,
    evolutionChain: [
      {
        species: "machop",
        evolvesTo: [
          [
            {
              species: "machoke",
              evolvesTo: [
                [
                  {
                    species: "machamp",
                    evolvesTo: null,
                  },
                ],
              ],
            },
          ],
        ],
      },
    ],
    requestEvolutionChain: () => {},
  },
  requestAbilityShortEffect: () => {},
  requestPokemonByType: () => {},
};

test("renders default component", () => {
  render(<PokemonDetails {...defaultProps} />);

  expect(screen.getAllByText("machop")).toBeTruthy();
  expect(screen.getByText("#66")).toBeTruthy();
  expect(screen.getByText("195")).toBeTruthy();
  expect(screen.getByText("8")).toBeTruthy();
  expect(screen.getByText("fighting")).toBeTruthy();
  expect(screen.getByText("steadfast")).toBeTruthy();
  expect(screen.getByText("machamp")).toBeTruthy();
  expect(screen.queryByTestId("pokemonInfos.details")).toBeTruthy();
  expect(screen.queryByText("Loading information")).toBeNull();
  expect(
    screen.queryByText("Error loading short effect information")
  ).toBeNull();
});

test("fires given function when type is pressed", () => {
  const requestPokemonByTypeMock = jest.fn();
  render(
    <PokemonDetails
      {...defaultProps}
      requestPokemonByType={requestPokemonByTypeMock}
    />
  );

  fireEvent.click(screen.getByText("fighting"));

  expect(requestPokemonByTypeMock).toHaveBeenCalledTimes(1);
  expect(requestPokemonByTypeMock).toHaveBeenCalledWith(
    "https://pokeapi.co/api/v2/type/2/"
  );
});

test("fires given function when ability is pressed", () => {
  const requestAbilityShortEffectMock = jest.fn();
  render(
    <PokemonDetails
      {...defaultProps}
      requestAbilityShortEffect={requestAbilityShortEffectMock}
    />
  );

  fireEvent.click(screen.getByText("steadfast"));

  expect(requestAbilityShortEffectMock).toHaveBeenCalledTimes(1);
  expect(requestAbilityShortEffectMock).toHaveBeenCalledWith(
    "https://pokeapi.co/api/v2/ability/80/"
  );
});
