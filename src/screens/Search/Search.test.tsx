import { render, screen } from "@testing-library/react";
import { AppContext } from "../../context/AppContext";
import Search from "./Search";
import { mockedData } from "../../components/search/RenderCards/RenderCards.test";

describe("Search Component", () => {
  test("renders the component with loading animation", () => {
    render(
      <AppContext.Provider
        value={{ updateData: jest.fn(), data: [], loading: true, error: null }}
      >
        <Search />
      </AppContext.Provider>
    );
    expect(screen.getByTestId("loading-animation-wrapper")).toBeInTheDocument();
  });

  test("renders the component with error animation", () => {
    render(
      <AppContext.Provider
        value={{
          updateData: jest.fn(),
          data: [],
          loading: false,
          error: "Error getting data",
        }}
      >
        <Search />
      </AppContext.Provider>
    );
    expect(screen.getByTestId("error-animation-wrapper")).toBeInTheDocument();
    expect(screen.getByText("Error getting data")).toBeInTheDocument();
  });

  test("renders the component with info animation on initial load", () => {
    render(
      <AppContext.Provider
        value={{
          updateData: jest.fn(),
          data: [],
          loading: false,
          error: null,
        }}
      >
        <Search />
      </AppContext.Provider>
    );
    expect(screen.getByTestId("info-animation-wrapper")).toBeInTheDocument();
    expect(screen.getByText("Whats on your mind?")).toBeInTheDocument();
  });

  test("renders the component with RenderCards when have data and no error and not loading", () => {
    render(
      <AppContext.Provider
        value={{
          updateData: jest.fn(),
          data: mockedData,
          loading: false,
          error: null,
        }}
      >
        <Search />
      </AppContext.Provider>
    );
    expect(screen.getByTestId("render-cards-container")).toBeInTheDocument();
  });
});
