import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import PokemonEvolution from "../PokemonEvolution";

const defaultProps = {
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
};

test("renders default component", () => {
  render(<PokemonEvolution {...defaultProps} />);

  expect(screen.queryByText("machop")).toBeTruthy();
  expect(screen.queryByText("machoke")).toBeTruthy();
  expect(screen.queryByText("machamp")).toBeTruthy();
  expect(screen.queryByText("Loading pókemon evolution chain")).toBeFalsy();
  expect(
    screen.queryByText("Error loading pókemon evolution chain")
  ).toBeFalsy();
});

test("renders loading component when loading prop is true", () => {
  const propsWithLoading = {
    pokemonEvolutionState: {
      ...defaultProps.pokemonEvolutionState,
      loading: true,
    },
  };
  render(<PokemonEvolution {...propsWithLoading} />);

  expect(screen.queryByText("machop")).toBeFalsy();
  expect(screen.queryByText("machoke")).toBeFalsy();
  expect(screen.queryByText("machamp")).toBeFalsy();
  expect(screen.queryByText("Loading pókemon evolution chain")).toBeTruthy();
  expect(
    screen.queryByText("Error loading pókemon evolution chain")
  ).toBeFalsy();
});

test("renders error component when error prop is true", () => {
  const propsWithError = {
    pokemonEvolutionState: {
      ...defaultProps.pokemonEvolutionState,
      error: true,
    },
  };
  render(<PokemonEvolution {...propsWithError} />);

  expect(screen.queryByText("machop")).toBeFalsy();
  expect(screen.queryByText("machoke")).toBeFalsy();
  expect(screen.queryByText("machamp")).toBeFalsy();
  expect(screen.queryByText("Loading pókemon evolution chain")).toBeFalsy();
  expect(
    screen.queryByText("Error loading pókemon evolution chain")
  ).toBeTruthy();
});

test("fires given function when button is pressed", () => {
  const requestEvolutionChain = jest.fn();
  const propsWithError = {
    pokemonEvolutionState: {
      ...defaultProps.pokemonEvolutionState,
      error: true,
      requestEvolutionChain,
    },
  };
  render(<PokemonEvolution {...propsWithError} />);

  const button = screen.getByText("Try again");
  expect(button).toBeTruthy();

  fireEvent.click(button);
  expect(requestEvolutionChain).toHaveBeenCalledTimes(1);
});
