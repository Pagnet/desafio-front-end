import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import SearchForm from "../";

test("renders default component", () => {
  const formProps = {
    searchInputValue: "tangela",
    handleSearchInputChange: () => {},
    handleGoButtonPress: () => {},
    handleClearButtonPress: () => {},
  };
  render(<SearchForm {...formProps} />);

  const input = screen.getByPlaceholderText("Charizard");

  expect(input).toBeInTheDocument();
  expect(input).toHaveValue("tangela");
  expect(screen.getByText("Go")).toBeInTheDocument();
  expect(screen.getByText("Clear")).toBeInTheDocument();
});

test("fires given function when input change", () => {
  const mockFunction = jest.fn();
  const formProps = {
    searchInputValue: "tangela",
    handleSearchInputChange: mockFunction,
    handleGoButtonPress: () => {},
    handleClearButtonPress: () => {},
  };
  render(<SearchForm {...formProps} />);

  const input = screen.getByPlaceholderText("Charizard");

  expect(input).toBeInTheDocument();

  fireEvent.change(input, { target: { value: "ponita" } });
  expect(mockFunction).toHaveBeenCalledTimes(1);
});

test("fires given function when primary button is pressed", () => {
  const mockFunction = jest.fn();
  const formProps = {
    searchInputValue: "tangela",
    handleSearchInputChange: () => {},
    handleGoButtonPress: mockFunction,
    handleClearButtonPress: () => {},
  };
  render(<SearchForm {...formProps} />);

  const primaryButton = screen.getByText("Go");

  expect(primaryButton).toBeInTheDocument();

  fireEvent.click(primaryButton);
  expect(mockFunction).toHaveBeenCalledTimes(1);
});

test("fires given function when secondary button is pressed", () => {
  const mockFunction = jest.fn();
  const formProps = {
    searchInputValue: "tangela",
    handleSearchInputChange: () => {},
    handleGoButtonPress: () => {},
    handleClearButtonPress: mockFunction,
  };
  render(<SearchForm {...formProps} />);

  const secondaryButton = screen.getByText("Clear");

  expect(secondaryButton).toBeInTheDocument();

  fireEvent.click(secondaryButton);
  expect(mockFunction).toHaveBeenCalledTimes(1);
});
