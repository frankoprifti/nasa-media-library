import { render, screen } from "@testing-library/react";
import InfoAnimation from "./InfoAnimation";

describe("InfoAnimation component", () => {
  test("renders without errors", () => {
    render(<InfoAnimation size={50} />);
    const errorAnimationWrapper = screen.getByTestId("info-animation-wrapper");
    expect(errorAnimationWrapper).toBeInTheDocument();
  });

  test("renders Lottie animation with correct options", () => {
    render(<InfoAnimation size={50} />);
    const lottieAnimation = screen.getByTestId("lottie-animation");
    expect(lottieAnimation).toBeInTheDocument();

    expect(lottieAnimation).toHaveAttribute("data-testid", "lottie-animation");
    expect(lottieAnimation).toHaveAttribute("width", "100");
    expect(lottieAnimation).toHaveAttribute("height", "50");
  });

  test("displays error message", () => {
    const infoMessage = "This is an info message";
    render(<InfoAnimation size={50} info={infoMessage} />);
    const errorElement = screen.getByText(infoMessage);
    expect(errorElement).toBeInTheDocument();
  });
});
