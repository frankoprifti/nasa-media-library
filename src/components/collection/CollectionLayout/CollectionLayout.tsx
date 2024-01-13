import { FC, useMemo } from "react";
import "./CollectionLayout.scss";
import { ImageData } from "../../../entities";
import Gallery from "../Gallery/Gallery";
import moment from "moment";

const CollectionLayout: FC<{ data: ImageData | null }> = ({ data }) => {
  const galleryImages = useMemo(() => {
    if (data?.collection?.items) {
      return Object.values(data?.collection.items!)
        .map(({ href }) => href)
        .filter((link) => !link.includes(".json"));
    }
  }, [data?.collection?.items]);
  return (
    <div
      className={"collection-layout-wrapper"}
      data-testid={"collection-layout-wrapper"}
    >
      <div className={"collection-main"}>
        <div className={"collection-description"}>
          <h1>{data?.metadata["AVAIL:Title"]}</h1>
          <h3>{data?.metadata["AVAIL:Description"]}</h3>
          <div>
            <h2>Keywords</h2>
            <ul>
              {data?.metadata["AVAIL:Keywords"].map((keyword, i) => (
                <li key={`keyword-${i}`}>{keyword}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className={"img-and-copyright"}>
          <img
            src={data?.collection.items[0].href}
            alt={data?.metadata["AVAIL:Title"]}
          />
          <b>
            Shot on:&nbsp;
            {moment(data?.metadata["AVAIL:DateCreated"]).format("DD/MM/YYYY")}
            <br />
            📷&nbsp;{data?.metadata["AVAIL:Photographer"] || "N/A"} | 🌍&nbsp;
            {data?.metadata["AVAIL:Location"] || "N/A"}
          </b>
        </div>
      </div>
      <Gallery images={galleryImages || []} />
    </div>
  );
};
export default CollectionLayout;
