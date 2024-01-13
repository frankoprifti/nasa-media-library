import React from "react";
import { render, screen } from "@testing-library/react";
import Header from "./Header";

test("renders Header component with title", () => {
  render(<Header />);
  const titleElement = screen.getByText(/NASA Media Library/i);
  expect(titleElement).toBeInTheDocument();
});

test("renders Header component with Animation component", () => {
  render(<Header />);
  const animationElement = screen.getByTestId("animation-mock");
  expect(animationElement).toBeInTheDocument();
});

test("renders Header component with correct class", () => {
  render(<Header />);
  const headerWrapperElement = screen.getByTestId("header-wrapper");
  expect(headerWrapperElement).toHaveClass("header-wrapper");
});
