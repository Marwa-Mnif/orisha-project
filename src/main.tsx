import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./pages/Home";
import "./style.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CharacterDetail from "./pages/CharacterDetails";
import LocationDetails from "./pages/LocationDetails";
import { FavoritesProvider } from "./context/FavoritesContext";
import CharacterList from "./pages/CharacterList";
import Footer from "./components/Footer";
import Header from "./components/Header";
import FavoritesList from "./pages/FavoritesList";
import ErrorBoundary from "./components/ErrorBoundary";
import BackToTopButton from "./components/BackToTopButton";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ErrorBoundary>
      <FavoritesProvider>
        <BrowserRouter>
          <div className="tw-relative">
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/characters" element={<CharacterList />} />
              <Route path="/character/:id" element={<CharacterDetail />} />
              <Route path="/location/:id" element={<LocationDetails />} />
              <Route path="/favourites" element={<FavoritesList />} />
            </Routes>
            <Footer />
            <BackToTopButton />
          </div>
        </BrowserRouter>
      </FavoritesProvider>
    </ErrorBoundary>
  </React.StrictMode>
);
