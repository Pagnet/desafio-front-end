import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Loader from "../";

test("renders default component", () => {
  render(<Loader message="Testing" />);

  const text = screen.getByText("Testing");
  expect(text).toBeInTheDocument();
});
