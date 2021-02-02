import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import ErrorMessage from "../";

test("renders default component", () => {
  render(
    <ErrorMessage
      message="Testing"
      buttonText="Button test"
      buttonAction={jest.fn()}
    />
  );

  const text = screen.getByText("Testing");
  const buttonText = screen.getByText("Button test");
  expect(text).toBeInTheDocument();
  expect(buttonText).toBeInTheDocument();
});

test("fires given function when button is pressed", () => {
  const mockFunction = jest.fn();
  render(
    <ErrorMessage
      message="Testing"
      buttonText="Button test"
      buttonAction={mockFunction}
    />
  );

  fireEvent.click(screen.getByText("Button test"));

  expect(mockFunction).toHaveBeenCalledTimes(1);
});

test("does not render button when button action is not passed", () => {
  render(<ErrorMessage message="Testing" buttonText={"Button test"} />);

  const text = screen.getByText("Testing");
  const buttonText = screen.queryByText("Button test");
  expect(text).toBeInTheDocument();
  expect(buttonText).toBeNull();
});
