import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";

import PokemonCard from "../";

describe("PokemonCard", () => {
  it("default render", () => {
    render(
      <PokemonCard
        pokemon={{
          name: "Eevee",
          id: 133,
          imagem: "some-image",
        }}
        primaryButtonText="primary-button"
        primaryButtonAction={() => {}}
        secondaryButtonText="secondary-button"
        secondaryButtonAction={() => {}}
      />
    );

    expect(screen.getByText("Eevee")).toBeTruthy();
    expect(screen.getByText("#133")).toBeTruthy();
    expect(screen.getByText("primary-button")).toBeTruthy();
    expect(screen.getByText("secondary-button")).toBeTruthy();
  });

  it("fire given function when primary button is pressed", () => {
    const mockedFunction = jest.fn();
    render(
      <PokemonCard
        pokemon={{
          name: "Eevee",
          id: 133,
          imagem: "some-image",
        }}
        primaryButtonText="primary-button"
        primaryButtonAction={mockedFunction}
        secondaryButtonText="secondary-button"
        secondaryButtonAction={() => {}}
      />
    );

    fireEvent.click(screen.getByText("primary-button"));

    expect(mockedFunction).toBeCalledTimes(1);
  });

  it("fire given function when secondary button is pressed", () => {
    const mockedFunction = jest.fn();
    render(
      <PokemonCard
        pokemon={{
          name: "Eevee",
          id: 133,
          imagem: "some-image",
        }}
        primaryButtonText="primary-button"
        primaryButtonAction={() => {}}
        secondaryButtonText="secondary-button"
        secondaryButtonAction={mockedFunction}
      />
    );

    fireEvent.click(screen.getByText("secondary-button"));

    expect(mockedFunction).toBeCalledTimes(1);
  });
});
