import Header from "../../components/global/Header/Header";
import SearchFields from "../../components/search/SearchFields/SearchFields";
import "./Search.scss";

export default function Search() {
  return (
    <div className={"search-screen"}>
      <Header />
      <div className={"search-fields-container"}>
        <h1>Search the universe</h1>
        <SearchFields />
      </div>
    </div>
  );
}
