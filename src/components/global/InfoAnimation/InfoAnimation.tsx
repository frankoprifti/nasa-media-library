import React from "react";
import Lottie from "react-lottie";
import animation from "../../../assets/infoAnimation.json";
import "./InfoAnimation.scss";

export default function InfoAnimation({
  size,
  info,
}: {
  size: number;
  info?: string;
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
    <div
      className={"info-animation-wrapper"}
      data-testid={"info-animation-wrapper"}
    >
      <Lottie options={defaultOptions} width={size * 2} height={size} />
      <h2>{info}</h2>
    </div>
  );
}
