import { render, screen } from "@testing-library/react";
import LoadingAnimation from "./LoadingAnimation";

describe("LoadingAnimation component", () => {
  test("renders without errors", () => {
    render(<LoadingAnimation size={50} />);
    const loadingAnimationWrapper = screen.getByTestId(
      "loading-animation-wrapper"
    );
    expect(loadingAnimationWrapper).toBeInTheDocument();
  });

  test("renders Lottie animation with correct options", () => {
    render(<LoadingAnimation size={50} />);
    const lottieAnimation = screen.getByTestId("lottie-animation");
    expect(lottieAnimation).toBeInTheDocument();

    expect(lottieAnimation).toHaveAttribute("data-testid", "lottie-animation");
    expect(lottieAnimation).toHaveAttribute("width", "50");
    expect(lottieAnimation).toHaveAttribute("height", "50");
  });

  test("displays search message", () => {
    render(<LoadingAnimation size={50} />);
    const searchMessage = screen.getByText("Searching through universe");
    expect(searchMessage).toBeInTheDocument();
  });
});
