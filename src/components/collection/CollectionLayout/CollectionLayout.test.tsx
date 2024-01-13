import { render, screen } from "@testing-library/react";
import { ImageData } from "../../../entities";
import CollectionLayout from "./CollectionLayout";

const mockData: ImageData = {
  metadata: {
    "AVAIL:Title": "Sample Title",
    "AVAIL:Description": "Sample Description",
    "AVAIL:Keywords": ["Keyword1", "Keyword2"],
    "AVAIL:DateCreated": "2022-01-01",
    "AVAIL:Photographer": "John Doe",
    "AVAIL:Location": "Sample Location",
  },
  collection: {
    version: "1.0",
    href: "collection-url",
    items: [
      {
        href: "image1.jpg",
      },
      {
        href: "image2.jpg",
      },
    ],
  },
};

describe("CollectionLayout Component", () => {
  test("renders CollectionLayout with provided data", () => {
    render(<CollectionLayout data={mockData} />);
    expect(screen.getByText("Sample Title")).toBeInTheDocument();
    expect(screen.getByText("Sample Description")).toBeInTheDocument();
    expect(screen.getByText("Keywords")).toBeInTheDocument();
    expect(screen.getByText("Keyword1")).toBeInTheDocument();
    expect(screen.getByText("Keyword2")).toBeInTheDocument();
    expect(
      screen.getByText(/Shot on: \d{2}\/\d{2}\/\d{4}/)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/📷 [A-Za-z\s]+ \| 🌍 [A-Za-z\s]+/)
    ).toBeInTheDocument();

    const imageElement = screen.getByAltText(
      "Sample Title"
    ) as HTMLImageElement;
    expect(imageElement).toBeInTheDocument();
    expect(imageElement.src).toContain("image1.jpg");
  });

  test("renders N/A when Photographer is not available", () => {
    const dataWithoutPhotographer: ImageData = {
      ...mockData,
      metadata: { ...mockData.metadata, "AVAIL:Photographer": "" },
    };

    render(<CollectionLayout data={dataWithoutPhotographer} />);

    const photographerElement = screen.getByText(/📷 N\/A \|/);
    expect(photographerElement).toBeInTheDocument();
  });

  test("renders N/A when Location is not available", () => {
    const dataWithoutLocation: ImageData = {
      ...mockData,
      metadata: { ...mockData.metadata, "AVAIL:Location": "" },
    };

    render(<CollectionLayout data={dataWithoutLocation} />);

    const locationElement = screen.getByText(/🌍 N\/A/);
    expect(locationElement).toBeInTheDocument();
  });
});
