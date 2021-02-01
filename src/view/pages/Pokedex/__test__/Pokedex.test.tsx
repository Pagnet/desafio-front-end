import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

import Pokedex from "../";

const charizard = {
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

const machop = {
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

test("renders component without pokemon list", () => {
  const initialState = {
    pokedex: {
      pokemon: [],
    },
  };
  const mockStore = configureStore();

  const store = mockStore(initialState);
  render(
    <Provider store={store}>
      <Pokedex />
    </Provider>
  );

  expect(screen.getByText("Pokédex")).toBeTruthy();
  expect(
    screen.queryByText(
      "Here, you can know more informations about Pokémon you saved on Pokédex"
    )
  ).toBeTruthy();
  expect(screen.queryByText("charizard")).toBeNull();
  expect(screen.queryByText("machop")).toBeNull();
  expect(
    screen.queryByText("Oh no! You don't have Pokémon on your Pokédex.")
  ).toBeTruthy();
});

test("renders component with pokemon list", () => {
  const initialState = {
    pokedex: {
      pokemon: [charizard, machop],
    },
  };
  const mockStore = configureStore();

  const store = mockStore(initialState);
  render(
    <Provider store={store}>
      <Pokedex />
    </Provider>
  );

  expect(screen.getByText("Pokédex")).toBeTruthy();
  expect(
    screen.queryByText(
      "Here, you can know more informations about Pokémon you saved on Pokédex"
    )
  ).toBeTruthy();
  expect(screen.queryByText("charizard")).toBeTruthy();
  expect(screen.queryByText("machop")).toBeTruthy();
  expect(
    screen.queryByText("Oh no! You don't have Pokémon on your Pokédex.")
  ).toBeNull();
});
