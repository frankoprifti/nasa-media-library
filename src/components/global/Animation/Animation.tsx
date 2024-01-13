import React from "react";
import Lottie from "react-lottie";
import animation from "../../../assets/animation.json";

export default function Animation({ size }: { size: number }) {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div>
      <Lottie
        options={defaultOptions}
        width={size}
        height={size}
        data-testid={"animation-mock"}
      />
    </div>
  );
}
