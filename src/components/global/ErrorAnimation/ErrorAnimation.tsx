import React from "react";
import Lottie from "react-lottie";
import animation from "../../../assets/errorAnimation.json";
import "./ErrorAnimation.scss";

export default function ErrorAnimation({
  size,
  error,
}: {
  size: number;
  error?: string;
}) {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className={"error-animation-wrapper"}>
      <Lottie options={defaultOptions} width={size} height={size} />
      {error}
    </div>
  );
}
