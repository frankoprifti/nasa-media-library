import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import AppProvider from "./context/AppContext";
import Collection from "./screens/Collection/Collection";
import Search from "./screens/Search/Search";
import ScrollToTop from "./ScrollToTop";

export default function App() {
  return (
    <AppProvider>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/:id" element={<Collection />} />
          <Route path="/" element={<Search />} />
        </Routes>
      </Router>
    </AppProvider>
  );
}
