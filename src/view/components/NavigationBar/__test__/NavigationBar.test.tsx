import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

import NavigationBar from "../index";

const mockState = {
  searchPokemon: {
    loading: false,
    error: null,
    pokemonFound: {
      name: "shellder",
      id: 90,
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/90.png",
      weight: 40,
      height: 3,
      types: [
        {
          name: "water",
          url: "https://pokeapi.co/api/v2/type/11/",
        },
      ],
      abilities: [
        {
          name: "shell-armor",
          url: "https://pokeapi.co/api/v2/ability/75/",
        },
        {
          name: "skill-link",
          url: "https://pokeapi.co/api/v2/ability/92/",
        },
        {
          name: "overcoat",
          url: "https://pokeapi.co/api/v2/ability/142/",
        },
      ],
      stats: {
        hp: 30,
        attack: 65,
        defense: 100,
        "special-attack": 45,
        "special-defense": 25,
        speed: 40,
      },
      species: {
        name: "shellder",
        url: "https://pokeapi.co/api/v2/pokemon-species/90/",
      },
    },
  },
  pokedex: {
    pokemon: [
      {
        name: "shellder",
        id: 90,
        image:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/90.png",
        weight: 40,
        height: 3,
        types: [
          {
            name: "water",
            url: "https://pokeapi.co/api/v2/type/11/",
          },
        ],
        abilities: [
          {
            name: "shell-armor",
            url: "https://pokeapi.co/api/v2/ability/75/",
          },
          {
            name: "skill-link",
            url: "https://pokeapi.co/api/v2/ability/92/",
          },
          {
            name: "overcoat",
            url: "https://pokeapi.co/api/v2/ability/142/",
          },
        ],
        stats: {
          hp: 30,
          attack: 65,
          defense: 100,
          "special-attack": 45,
          "special-defense": 25,
          speed: 40,
        },
        species: {
          name: "shellder",
          url: "https://pokeapi.co/api/v2/pokemon-species/90/",
        },
      },
    ],
  },
};

test("renders default component", () => {
  const mockStore = configureStore();

  const store = mockStore(mockState);
  render(
    <Provider store={store}>
      <Router>
        <NavigationBar />
      </Router>
    </Provider>
  );
  expect(screen.getByText("Pokedex (1)")).toBeTruthy();
  expect(screen.getByText("Search")).toBeTruthy();
});
