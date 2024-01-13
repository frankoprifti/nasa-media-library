import React, { useState } from "react";
import "./Gallery.scss";
import { animateImage, reverseAnimateImage } from "../../../utils/animations";

export default function Gallery({ images }: { images: string[] }) {
  const [openId, setOpenId] = useState<string | null>();
  return (
    <div className={"gallery-wrapper"}>
      <h2>Gallery</h2>
      <div className={"images-wrapper"}>
        {images.map((img, i) => (
          <img
            key={i}
            id={`img-${i}`}
            src={img}
            alt={`Gallery ${i}`}
            onClick={(e) => {
              e.stopPropagation();
              setOpenId(openId === i.toString() ? null : i.toString());
              if (openId !== i.toString()) {
                animateImage(i.toString());
                if (openId) {
                  reverseAnimateImage(openId);
                }
              } else {
                reverseAnimateImage(openId);
              }
            }}
          />
        ))}
      </div>
      {openId && (
        <div
          className={"img-backdrop"}
          data-testid={"img-backdrop"}
          onClick={() => {
            reverseAnimateImage(openId!);
            setOpenId(null);
          }}
        />
      )}
    </div>
  );
}
