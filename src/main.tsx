import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./pages/Home";
import "./style.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CharacterDetail from "./pages/CharacterDetails";
import LocationDetails from "./pages/LocationDetails";
import { FavoritesProvider } from "./context/FavoritesContext";
import FavouritesList from "./pages/FavouritesList";
import CharacterList from "./pages/CharacterList";
import Footer from "./components/Footer";
import Header from "./components/Header";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <FavoritesProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/characters" element={<CharacterList />} />
          <Route path="/character/:id" element={<CharacterDetail />} />
          <Route path="/location/:id" element={<LocationDetails />} />
          <Route path="/favourites" element={<FavouritesList />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </FavoritesProvider>
  </React.StrictMode>
);
