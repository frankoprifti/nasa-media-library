import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import Input from "./Input";

test("renders Input component with text type", () => {
  const placeholder = "Enter text";
  const onChange = jest.fn();

  render(<Input placeholder={placeholder} onChange={onChange} />);

  const inputElement = screen.getByPlaceholderText(placeholder);
  expect(inputElement).toBeInTheDocument();
  fireEvent.change(inputElement, { target: { value: "Test input" } });
  expect(onChange).toHaveBeenCalledWith("Test input");
});

test("renders Input component with number type", () => {
  const placeholder = "Enter number";
  const onChange = jest.fn();

  render(
    <Input
      placeholder={placeholder}
      onChange={onChange}
      type="number"
      maxNumber={10}
    />
  );

  const inputElement = screen.getByPlaceholderText(placeholder);
  expect(inputElement).toBeInTheDocument();
  fireEvent.change(inputElement, { target: { value: "5" } });
  expect(onChange).toHaveBeenCalledWith("5");
});

test("renders Input component with default value", () => {
  const placeholder = "Enter text";
  const defaultValue = "Default Value";
  const onChange = jest.fn();

  render(
    <Input placeholder={placeholder} value={defaultValue} onChange={onChange} />
  );

  const inputElement = screen.getByPlaceholderText(placeholder);
  expect(inputElement).toHaveValue(defaultValue);
});
