import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

import PokemonInfosPage from "../";

const pokemon = {
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

jest.mock("react-router-dom", () => ({
  useLocation: () => ({ pathname: "eevee" }),
}));

test("renders default component", () => {
  const initialState = {
    searchPokemon: {
      loading: false,
      error: null,
      pokemonFound: pokemon,
    },
  };
  const mockStore = configureStore();

  const store = mockStore(initialState);
  render(
    <Provider store={store}>
      <PokemonInfosPage />
    </Provider>
  );

  expect(screen.getByText("Pokémon informations")).toBeTruthy();
  expect(screen.queryByTestId("pokemonInfos.details")).toBeTruthy();
  expect(screen.queryByText("Loading information about eevee")).toBeNull();
  expect(screen.queryByText("Cannot find informations about eevee")).toBeNull();
});

test("renders loading component when loading state is true", () => {
  const initialState = {
    searchPokemon: {
      loading: true,
      error: null,
      pokemonFound: null,
    },
  };
  const mockStore = configureStore();

  const store = mockStore(initialState);
  render(
    <Provider store={store}>
      <PokemonInfosPage />
    </Provider>
  );

  expect(screen.getByText("Pokémon informations")).toBeTruthy();
  expect(screen.queryByTestId("pokemonInfos.details")).toBeNull();
  expect(screen.queryByText("Loading information about eevee")).toBeTruthy();
  expect(screen.queryByText("Cannot find informations about eevee")).toBeNull();
});

test("renders error component when error state is true", () => {
  const initialState = {
    searchPokemon: {
      loading: false,
      error: "Not Found",
      pokemonFound: null,
    },
  };
  const mockStore = configureStore();

  const store = mockStore(initialState);
  render(
    <Provider store={store}>
      <PokemonInfosPage />
    </Provider>
  );

  expect(screen.getByText("Pokémon informations")).toBeTruthy();
  expect(screen.queryByTestId("pokemonInfos.details")).toBeNull();
  expect(screen.queryByText("Loading information about eevee")).toBeNull();
  expect(
    screen.queryByText("Cannot find informations about eevee")
  ).toBeTruthy();
});
