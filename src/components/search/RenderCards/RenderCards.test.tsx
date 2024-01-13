import { render, screen } from "@testing-library/react";
import { AppContext } from "../../../context/AppContext";
import RenderCards from "./RenderCards";

export const mockedData = [
  {
    href: "https://images-assets.nasa.gov/image/hubble-observes-one-of-a-kind-star-nicknamed-nasty_17754652960_o/collection.json",
    data: [
      {
        center: "GSFC",
        title: "Hubble Observes One-of-a-Kind Star Nicknamed ‘Nasty’",
        keywords: ["Hubble", "Milky Way", "star"],
        nasa_id:
          "hubble-observes-one-of-a-kind-star-nicknamed-nasty_17754652960_o",
        date_created: "2015-03-21T00:00:00Z",
        media_type: "image",
        description:
          "Astronomers using NASA’s Hubble Space Telescope have uncovered surprising new clues about a hefty, rapidly aging star whose behavior has never been seen before in our Milky Way galaxy. In fact, the star is so weird that astronomers have nicknamed it “Nasty 1,” a play on its catalog name of NaSt1. The star may represent a brief transitory stage in the evolution of extremely massive stars.  First discovered several decades ago, Nasty 1 was identified as a Wolf-Rayet star, a rapidly evolving star that is much more massive than our sun. The star loses its hydrogen-filled outer layers quickly, exposing its super-hot and extremely bright helium-burning core.  But Nasty 1 doesn’t look like a typical Wolf-Rayet star. The astronomers using Hubble had expected to see twin lobes of gas flowing from opposite sides of the star, perhaps similar to those emanating from the massive star Eta Carinae, which is a Wolf-Rayet candidate.   Instead, Hubble revealed a pancake-shaped disk of gas encircling the star. The vast disk is nearly 2 trillion miles wide, and may have formed from an unseen companion star that snacked on the outer envelope of the newly formed Wolf-Rayet.  Based on current estimates, the nebula surrounding the stars is just a few thousand years old, and as close as 3,000 light-years from Earth.  Credits: NASA/Hubble",
      },
    ],
    links: [
      {
        href: "https://images-assets.nasa.gov/image/hubble-observes-one-of-a-kind-star-nicknamed-nasty_17754652960_o/hubble-observes-one-of-a-kind-star-nicknamed-nasty_17754652960_o~thumb.jpg",
        rel: "preview",
        render: "image",
      },
    ],
    metadata: {
      "AVAIL:Photographer": "",
      "AVAIL:Location": "",
      "AVAIL:Description": "",
      "AVAIL:Title": "",
      "AVAIL:DateCreated": "1969-03-07T00:00:00Z",
      "AVAIL:Keywords": ["APOLLO 9"],
    },
  },
];

test("should render nothing when context data is empty", () => {
  render(<RenderCards />);
  const cardsWrapper = screen.queryByTestId("render-cards-wrapper");
  expect(cardsWrapper).toBeEmptyDOMElement();
});

test("should render cards based on context data", () => {
  render(
    <AppContext.Provider
      value={{
        data: mockedData,
        updateData: () => {},
        loading: false,
        error: null,
      }}
    >
      <RenderCards />
    </AppContext.Provider>
  );

  const cards = screen.getAllByTestId("card");
  expect(cards).toHaveLength(1);
});
