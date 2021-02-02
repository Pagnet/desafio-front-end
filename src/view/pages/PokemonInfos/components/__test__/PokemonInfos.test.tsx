import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import PokemonInfos from "../PokemonInfos";

test("renders default component", () => {
  render(<PokemonInfos title="Power" text="8001" />);

  expect(screen.queryByText("Power")).toBeTruthy();
  expect(screen.queryByText("8001")).toBeTruthy();
});
