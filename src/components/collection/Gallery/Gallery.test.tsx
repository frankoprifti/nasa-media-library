import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Gallery from "./Gallery";
import { animateImage, reverseAnimateImage } from "../../../utils/animations";

jest.mock("../../../utils/animations", () => ({
  animateImage: jest.fn(),
  reverseAnimateImage: jest.fn(),
}));

const images = ["image1.jpg", "image2.jpg", "image3.jpg"];

describe("Gallery Component", () => {
  test("renders Gallery with provided images", () => {
    render(<Gallery images={images} />);

    expect(screen.getByText("Gallery")).toBeInTheDocument();

    images.forEach((img, i) => {
      const imageElement = screen.getByAltText(
        `Gallery ${i}`
      ) as HTMLImageElement;
      expect(imageElement).toBeInTheDocument();
      expect(imageElement.src).toContain(img);
    });
  });

  test("opens and closes image on click", () => {
    render(<Gallery images={images} />);

    const firstImage = screen.getByAltText("Gallery 0");

    fireEvent.click(firstImage);

    expect(animateImage).toHaveBeenCalledWith("0");

    fireEvent.click(firstImage);

    expect(reverseAnimateImage).toHaveBeenCalledWith("0");
  });

  test("opens and closes different images", () => {
    render(<Gallery images={images} />);

    const firstImage = screen.getByAltText("Gallery 0");
    const secondImage = screen.getByAltText("Gallery 1");
    fireEvent.click(firstImage);
    expect(animateImage).toHaveBeenCalledWith("0");
    fireEvent.click(secondImage);
    expect(reverseAnimateImage).toHaveBeenCalledWith("0");
    expect(animateImage).toHaveBeenCalledWith("1");
  });

  test("closes image on backdrop click", () => {
    render(<Gallery images={images} />);
    const firstImage = screen.getByAltText("Gallery 0");
    fireEvent.click(firstImage);
    const backdrop = screen.getByTestId("img-backdrop");
    fireEvent.click(backdrop);
    expect(reverseAnimateImage).toHaveBeenCalledWith("0");
  });
});
