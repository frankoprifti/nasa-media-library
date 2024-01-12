import { useContext } from "react";
import Header from "../../components/global/Header/Header";
import RenderCards from "../../components/search/RenderCards/RenderCards";
import SearchFields from "../../components/search/SearchFields/SearchFields";
import "./Search.scss";
import { AppContext } from "../../context/AppContext";
import ErrorAnimation from "../../components/global/ErrorAnimation/ErrorAnimation";
import LoadingAnimation from "../../components/global/LoadingAnimation/LoadingAnimation";

export default function Search() {
  const context = useContext(AppContext);
  const render = () => {
    if (context?.error) {
      return <ErrorAnimation size={200} error={context.error} />;
    } else if (context?.loading) {
      return <LoadingAnimation size={200} />;
    }
    return (
      <div className={"render-cards-container"}>
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
      {render()}
    </div>
  );
}
