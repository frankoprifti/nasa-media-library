import React from "react";
import Lottie from "react-lottie";
import animation from "../../../assets/animation.json";
import "./LoadingAnimation.scss";

export default function LoadingAnimation({ size }: { size: number }) {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div
      className={"loading-animation-wrapper"}
      data-testid={"loading-animation-wrapper"}
    >
      <Lottie options={defaultOptions} width={size} height={size} />
      <b>Searching through universe</b>
    </div>
  );
}
