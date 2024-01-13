import { render, screen } from "@testing-library/react";
import ErrorAnimation from "./ErrorAnimation";

describe("ErrorAnimation component", () => {
  test("renders without errors", () => {
    render(<ErrorAnimation size={50} />);
    const errorAnimationWrapper = screen.getByTestId("error-animation-wrapper");
    expect(errorAnimationWrapper).toBeInTheDocument();
  });

  test("renders Lottie animation with correct options", () => {
    render(<ErrorAnimation size={50} />);
    const lottieAnimation = screen.getByTestId("lottie-animation");
    expect(lottieAnimation).toBeInTheDocument();

    expect(lottieAnimation).toHaveAttribute("data-testid", "lottie-animation");
    expect(lottieAnimation).toHaveAttribute("width", "50");
    expect(lottieAnimation).toHaveAttribute("height", "50");
  });

  test("displays error message", () => {
    const errorMessage = "This is an error message";
    render(<ErrorAnimation size={50} error={errorMessage} />);
    const errorElement = screen.getByText(errorMessage);
    expect(errorElement).toBeInTheDocument();
  });
});
