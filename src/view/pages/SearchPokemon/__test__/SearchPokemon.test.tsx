import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

import SearchPokemon from "../";

test("renders default component", () => {
  const initialState = {
    searchPokemon: {
      loading: false,
      error: null,
      pokemonFound: null,
    },
  };
  const mockStore = configureStore();

  const store = mockStore(initialState);
  render(
    <Provider store={store}>
      <SearchPokemon />
    </Provider>
  );

  expect(screen.getByText("Search Pokémon")).toBeTruthy();
  expect(screen.queryByText("Searching pokémon...")).toBeNull();
  expect(screen.queryByText("Something went wrong")).toBeNull();
  expect(screen.queryByText("Save on Pokédex")).toBeNull();
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
      <SearchPokemon />
    </Provider>
  );

  expect(screen.queryByText("Searching pokémon...")).toBeTruthy();
  expect(screen.queryByText("Something went wrong")).toBeNull();
  expect(screen.queryByText("Save on Pokédex")).toBeNull();
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
      <SearchPokemon />
    </Provider>
  );

  expect(screen.queryByText("Searching pokémon...")).toBeNull();
  expect(screen.queryByText("Something went wrong")).toBeTruthy();
  expect(screen.queryByText("Save on Pokédex")).toBeNull();
});

test("renders pokemon Card component when has a pokemon found", () => {
  const initialState = {
    searchPokemon: {
      loading: false,
      error: null,
      pokemonFound: { name: "PokeTest" },
    },
  };
  const mockStore = configureStore();

  const store = mockStore(initialState);
  render(
    <Provider store={store}>
      <SearchPokemon />
    </Provider>
  );

  expect(screen.queryByText("Searching pokémon...")).toBeNull();
  expect(screen.queryByText("Something went wrong")).toBeNull();
  expect(screen.queryByText("PokeTest")).toBeTruthy();
});
