import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Search from "./screens/Search/Search";
import AppProvider from "./context/AppContext";

export default function App() {
  return (
    <AppProvider>
      <Router>
        <Routes>
          <Route path="/" Component={Search} />
        </Routes>
      </Router>
    </AppProvider>
  );
}
