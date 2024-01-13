import { fireEvent, render, screen } from "@testing-library/react";
import { AppContext } from "../../../context/AppContext";
import SearchFields from "./SearchFields";

describe("SearchFields Component", () => {
  test("renders without crashing", () => {
    render(
      <AppContext.Provider
        value={{ updateData: jest.fn(), data: [], loading: false, error: null }}
      >
        <SearchFields />
      </AppContext.Provider>
    );
  });

  test("updates input values correctly", () => {
    render(
      <AppContext.Provider
        value={{ updateData: jest.fn(), data: [], loading: false, error: null }}
      >
        <SearchFields />
      </AppContext.Provider>
    );

    const searchInput = screen.getByPlaceholderText(
      "Search the entire universe"
    ) as HTMLInputElement;
    const startYearInput = screen.getByPlaceholderText(
      "Start year"
    ) as HTMLInputElement;
    const endYearInput = screen.getByPlaceholderText(
      "End year"
    ) as HTMLInputElement;

    fireEvent.change(searchInput, { target: { value: "Test Search" } });
    fireEvent.change(startYearInput, { target: { value: "2020" } });
    fireEvent.change(endYearInput, { target: { value: "2022" } });

    expect(searchInput.value).toBe("Test Search");
    expect(startYearInput.value).toBe("2020");
    expect(endYearInput.value).toBe("2022");
  });
  test("search function calls context.updateData with correct arguments", () => {
    const mockUpdateData = jest.fn();

    render(
      <AppContext.Provider
        value={{
          updateData: mockUpdateData,
          data: [],
          loading: false,
          error: null,
        }}
      >
        <SearchFields />
      </AppContext.Provider>
    );

    const searchInput = screen.getByPlaceholderText(
      "Search the entire universe"
    ) as HTMLInputElement;
    const startYearInput = screen.getByPlaceholderText(
      "Start year"
    ) as HTMLInputElement;
    const endYearInput = screen.getByPlaceholderText(
      "End year"
    ) as HTMLInputElement;
    const searchButton = screen.getByText("Search");

    fireEvent.change(searchInput, { target: { value: "Test Search" } });
    fireEvent.change(startYearInput, { target: { value: "2020" } });
    fireEvent.change(endYearInput, { target: { value: "2022" } });
    fireEvent.click(searchButton);

    expect(mockUpdateData).toHaveBeenCalledWith("Test Search", 2020, 2022);
    fireEvent.change(searchInput, { target: { value: "Test Search" } });
    fireEvent.change(startYearInput, { target: { value: "" } });
    fireEvent.change(endYearInput, { target: { value: "" } });
    fireEvent.click(searchButton);

    expect(mockUpdateData).toHaveBeenCalledWith(
      "Test Search",
      undefined,
      undefined
    );
  });
  test("shows error notification if startYear is bigger than end year", () => {
    const mockUpdateData = jest.fn();

    render(
      <AppContext.Provider
        value={{
          updateData: mockUpdateData,
          data: [],
          loading: false,
          error: null,
        }}
      >
        <SearchFields />
      </AppContext.Provider>
    );

    const searchInput = screen.getByPlaceholderText(
      "Search the entire universe"
    ) as HTMLInputElement;
    const startYearInput = screen.getByPlaceholderText(
      "Start year"
    ) as HTMLInputElement;
    const endYearInput = screen.getByPlaceholderText(
      "End year"
    ) as HTMLInputElement;
    const searchButton = screen.getByText("Search");

    fireEvent.change(searchInput, { target: { value: "Test Search" } });
    fireEvent.change(startYearInput, { target: { value: "2023" } });
    fireEvent.change(endYearInput, { target: { value: "2022" } });
    fireEvent.click(searchButton);
    expect(mockUpdateData).not.toHaveBeenCalledWith("Test Search", 2023, 2022);
  });
});
