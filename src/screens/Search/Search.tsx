import { useContext } from "react";
import ErrorAnimation from "../../components/global/ErrorAnimation/ErrorAnimation";
import Header from "../../components/global/Header/Header";
import LoadingAnimation from "../../components/global/LoadingAnimation/LoadingAnimation";
import RenderCards from "../../components/search/RenderCards/RenderCards";
import SearchFields from "../../components/search/SearchFields/SearchFields";
import { AppContext } from "../../context/AppContext";
import "./Search.scss";
import InfoAnimation from "../../components/global/InfoAnimation/InfoAnimation";

export default function Search() {
  const context = useContext(AppContext);
  const renderContent = () => {
    if (context?.error) {
      return <ErrorAnimation size={200} error={context.error} />;
    } else if (context?.loading) {
      return <LoadingAnimation size={200} />;
    } else if (context?.data.length === 0) {
      return <InfoAnimation size={400} info={"Whats on your mind?"} />;
    }
    return (
      <div
        className={"render-cards-container"}
        data-testid={"render-cards-container"}
      >
        <RenderCards />
      </div>
    );
  };
  return (
    <div className={"search-screen"}>
      <Header />
      <div className={"search-fields-container"}>
        <h1>Search the universe</h1>
        <SearchFields />
      </div>
      {renderContent()}
    </div>
  );
}
