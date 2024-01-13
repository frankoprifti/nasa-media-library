import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import Button from "./Button";

test("renders Button component with text", () => {
  render(<Button text="Click Me" action={() => {}} />);
  const buttonTextElement = screen.getByText(/Click Me/i);
  expect(buttonTextElement).toBeInTheDocument();
});

test("renders Button component without disabled class", () => {
  render(<Button text="Enabled Button" action={() => {}} />);
  const buttonElement = screen.getByText(/Enabled Button/i);
  expect(buttonElement).toHaveClass("nasa-button");
  expect(buttonElement).not.toHaveClass("disabled");
});

test("renders Button component with disabled class", () => {
  render(<Button text="Disabled Button" action={() => {}} disabled />);
  const buttonElement = screen.getByText(/Disabled Button/i);
  expect(buttonElement).toHaveClass("nasa-button disabled");
});

test("calls action prop when button is clicked and not disabled", () => {
  const mockAction = jest.fn();
  render(<Button text="Click Me" action={mockAction} />);
  const buttonElement = screen.getByText(/Click Me/i);
  fireEvent.click(buttonElement);
  expect(mockAction).toHaveBeenCalledTimes(1);
});

test("does not call action prop when button is clicked and disabled", () => {
  const mockAction = jest.fn();
  render(<Button text="Disabled Button" action={mockAction} disabled />);
  const buttonElement = screen.getByText(/Disabled Button/i);
  fireEvent.click(buttonElement);
  expect(mockAction).not.toHaveBeenCalled();
});
