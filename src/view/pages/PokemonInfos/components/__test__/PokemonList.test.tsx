import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import PokemonList from "../PokemonList";

const defaultProps = {
  closeList: () => {},
  pokemonListState: {
    loading: false,

    error: false,
    pokemonList: [
      {
        pokemon: {
          name: "mankey",
          url: "https://pokeapi.co/api/v2/pokemon/56/",
        },
      },
      {
        pokemon: {
          name: "primeape",
          url: "https://pokeapi.co/api/v2/pokemon/57/",
        },
      },
    ],
  },
};

test("renders default component", () => {
  render(<PokemonList {...defaultProps} />);

  expect(screen.queryByText("mankey")).toBeTruthy();
  expect(screen.queryByText("primeape")).toBeTruthy();
  expect(screen.queryByText("Close List")).toBeTruthy();
  expect(screen.queryByText("Loading pókemon list")).toBeFalsy();
  expect(screen.queryByText("Error loading pókemon list")).toBeFalsy();
});

test("fires given function when close button is pressed", () => {
  const closeList = jest.fn();
  render(<PokemonList {...defaultProps} closeList={closeList} />);

  const button = screen.getByText("Close List");

  fireEvent.click(button);

  expect(button).toBeTruthy();
  expect(closeList).toHaveBeenCalledTimes(1);
});

test("renders loading component when loading prop is true", () => {
  const propsWithLoading = {
    ...defaultProps,
    pokemonListState: { ...defaultProps.pokemonListState, loading: true },
  };
  render(<PokemonList {...propsWithLoading} />);

  expect(screen.queryByText("mankey")).toBeFalsy();
  expect(screen.queryByText("primeape")).toBeFalsy();
  expect(screen.queryByText("Close List")).toBeFalsy();
  expect(screen.queryByText("Loading pókemon list")).toBeTruthy();
  expect(screen.queryByText("Error loading pókemon list")).toBeFalsy();
});

test("renders error component when error prop is true", () => {
  const propsWithError = {
    ...defaultProps,
    pokemonListState: { ...defaultProps.pokemonListState, error: true },
  };
  render(<PokemonList {...propsWithError} />);

  expect(screen.queryByText("mankey")).toBeFalsy();
  expect(screen.queryByText("primeape")).toBeFalsy();
  expect(screen.queryByText("Close List")).toBeFalsy();
  expect(screen.queryByText("Loading pókemon list")).toBeFalsy();
  expect(screen.queryByText("Error loading pókemon list")).toBeTruthy();
});
