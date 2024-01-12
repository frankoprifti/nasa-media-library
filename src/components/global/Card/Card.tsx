import React, { useEffect, useState } from "react";
import "./Card.scss";

interface CardProps {
  id: string;
  title: string;
  image: string;
  author: string;
  location: string;
}

const Card: React.FC<CardProps> = ({ id, title, image, author, location }) => {
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    if (activeId) {
      const cardItself = document.getElementById(`card-${id}`);
      const { left, top } = cardItself?.getBoundingClientRect()!;
      document.addEventListener("mousemove", function (e) {
        const hoverEl = document.getElementById(`hover-effect-${activeId}`);
        const calcOffset = hoverEl?.clientWidth! / 2;
        if (hoverEl) {
          hoverEl.style.left = e.pageX - left - calcOffset + "px";
          hoverEl.style.top =
            e.pageY - top - window.scrollY - calcOffset + "px";
        }
      });
    } else {
      document.removeEventListener("mousemove", () => {});
    }
    return () => {
      document.removeEventListener("mousemove", () => {});
    };
  }, [activeId, id]);

  return (
    <div
      id={`card-${id}`}
      data-testid="card"
      className={"card"}
      onMouseEnter={() => setActiveId(id)}
      onMouseLeave={() => setActiveId(null)}
      onClick={(e) => {}}
    >
      <div className={"background-color"} />
      <div id={`hover-effect-${id}`} className={"hover-effect"} />
      <img alt={`nasa-img-${id}`} className={"card-img"} src={image} />
      <h1>{title}</h1>
      <b>
        📷&nbsp;{author || "N/A"} | 🌍&nbsp;{location || "N/A"}
      </b>
    </div>
  );
};

export default Card;
