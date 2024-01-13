import React, { useContext } from "react";
import "./RenderCards.scss";
import Card from "../../global/Card/Card";
import { AppContext } from "../../../context/AppContext";

export default function RenderCards() {
  const context = useContext(AppContext);
  return (
    <div
      className={"render-cards-wrapper"}
      data-testid={"render-cards-wrapper"}
    >
      {context?.data?.map((card) => (
        <Card
          key={card.data[0].nasa_id}
          id={card.data[0].nasa_id}
          image={card.links[0].href}
          title={card.data[0].title}
          author={card.metadata["AVAIL:Photographer"]}
          location={card.metadata["AVAIL:Location"]}
        />
      ))}
    </div>
  );
}
