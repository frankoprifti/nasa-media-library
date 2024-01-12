import React from "react";
import "./Button.scss";

interface ButtonProps {
  text: string;
  action: () => void;
  disabled?: boolean;
}

export default function Button({ text, action, disabled }: ButtonProps) {
  return (
    <button
      className={`nasa-button ${disabled ? "disabled" : ""}`}
      onClick={() => {
        !disabled && action();
      }}
    >
      {text}
    </button>
  );
}
