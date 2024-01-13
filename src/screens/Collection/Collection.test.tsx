/* eslint-disable testing-library/no-unnecessary-act */
import React from "react";
import { act, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import {
  MemoryRouter,
  RouterProvider,
  createMemoryRouter,
} from "react-router-dom";
import Collection from "./Collection";
import App from "../../App";
import { ImageData } from "../../entities";
import { asset } from "../../api";

const mockCollectionData: ImageData = {
  collection: {
    version: "1.0",
    href: "https://images-api.nasa.gov/asset/KSC_20221115_Artemis%20I%20Launch-1",
    items: [
      {
        href: "https://images-assets.nasa.gov/image/KSC_20221115_Artemis I Launch-1/KSC_20221115_Artemis I Launch-1~orig.jpg",
      },
      {
        href: "https://images-assets.nasa.gov/image/KSC_20221115_Artemis I Launch-1/KSC_20221115_Artemis I Launch-1~large.jpg",
      },
      {
        href: "https://images-assets.nasa.gov/image/KSC_20221115_Artemis I Launch-1/KSC_20221115_Artemis I Launch-1~medium.jpg",
      },
      {
        href: "https://images-assets.nasa.gov/image/KSC_20221115_Artemis I Launch-1/KSC_20221115_Artemis I Launch-1~small.jpg",
      },
      {
        href: "https://images-assets.nasa.gov/image/KSC_20221115_Artemis I Launch-1/KSC_20221115_Artemis I Launch-1~thumb.jpg",
      },
      {
        href: "https://images-assets.nasa.gov/image/KSC_20221115_Artemis I Launch-1/metadata.json",
      },
    ],
  },
  metadata: {
    "AVAIL:Photographer": "STEVEN SEIPEL",
    "AVAIL:Title": "Artemis I Launch",
    "AVAIL:Description":
      "NASA’s Space Launch System (SLS) rocket with the Orion spacecraft atop launches the agency’s Artemis I flight test, Wednesday, Nov. 16 from Launch Complex 39B at NASA’s Kennedy Space Center in Florida. The Moon rocket and spacecraft lifted off at 1:47 a.m. ET. The Artemis I mission is the first integrated test of the agency’s deep space exploration systems: the Space Launch System rocket, Orion spacecraft, and supporting ground systems. The mission is the first in a series of increasingly complex missions to the Moon. With Artemis missions, NASA will land the first woman and first person of color on the Moon, using innovative technologies to explore more of the lunar surface than ever before.",
    "AVAIL:Location": "Kennedy Space Center",
    "AVAIL:Keywords": [
      "Artemis",
      "KSC",
      "MAF",
      "Marshall Space Flight Center",
      "Moon",
      "NASA",
      "Rocket",
      "Space Launch System",
      "launch vehicle",
      "rocket science",
      "sls",
    ],
    "AVAIL:DateCreated": "2022:11:16",
  },
};

jest.mock("../../api");

describe("Collection component with error", () => {
  test("renders Collection and shows error state when no data", async () => {
    (asset as jest.Mock).mockReturnValue({ error: "Error getting data" });
    const routes = [
      {
        path: "/:id",
        element: <Collection />,
      },
    ];
    const router = createMemoryRouter(routes, {
      initialEntries: ["/", "/123"],
      initialIndex: 1,
    });
    await act(async () => {
      render(<RouterProvider router={router} />);
    });

    expect(screen.getByTestId("collection-layout")).toBeInTheDocument();
    expect(screen.getByTestId("error-animation-wrapper")).toBeInTheDocument();
  });
  test("renders Collection with loading status", async () => {
    (asset as jest.Mock).mockReturnValue(mockCollectionData);
    const routes = [
      {
        path: "/:id",
        element: <Collection />,
      },
    ];
    const router = createMemoryRouter(routes, {
      initialEntries: ["/", "/123"],
      initialIndex: 1,
    });

    render(<RouterProvider router={router} />);

    expect(screen.getByTestId("collection-layout")).toBeInTheDocument();
    expect(screen.getByTestId("loading-animation-wrapper")).toBeInTheDocument();
  });
  test("renders Collection with data", async () => {
    (asset as jest.Mock).mockReturnValue(mockCollectionData);
    const routes = [
      {
        path: "/:id",
        element: <Collection />,
      },
    ];
    const router = createMemoryRouter(routes, {
      initialEntries: ["/", "/123"],
      initialIndex: 1,
    });

    await act(async () => {
      render(<RouterProvider router={router} />);
    });
    expect(screen.getByTestId("collection-layout")).toBeInTheDocument();
    expect(
      screen.queryByTestId("error-animation-wrapper")
    ).not.toBeInTheDocument();
    expect(screen.getByTestId("collection-layout-wrapper")).toBeInTheDocument();
  });
});
