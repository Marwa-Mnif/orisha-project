import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./pages/Home";
import "./style.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CharacterDetail from "./components/CharacterDetails";
import LocationDetails from "./components/LocationDetails";
import { FavoritesProvider } from "./context/FavoritesContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <FavoritesProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/character/:id" element={<CharacterDetail />} />
          <Route path="/location/:id" element={<LocationDetails />} />
        </Routes>
      </BrowserRouter>
    </FavoritesProvider>
  </React.StrictMode>
);
