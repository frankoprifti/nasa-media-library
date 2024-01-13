import { render, screen } from "@testing-library/react";
import Card from "./Card";

const mockCardProps = {
  id: "1",
  title: "Sample Card",
  image: "sample-image.jpg",
  author: "John Doe",
  location: "Earth",
};

test("renders Card component with correct title, author, and location", () => {
  render(<Card {...mockCardProps} />);
  const titleElement = screen.getByText(/Sample Card/i);
  const authorElement = screen.getByText(/John Doe/i);
  const locationElement = screen.getByText(/Earth/i);

  expect(titleElement).toBeInTheDocument();
  expect(authorElement).toBeInTheDocument();
  expect(locationElement).toBeInTheDocument();
});

test("renders Card component with correct image source", () => {
  render(<Card {...mockCardProps} />);
  const imageElement = screen.getByAltText(/nasa-img-1/i);

  expect(imageElement).toHaveAttribute("src", "sample-image.jpg");
});
