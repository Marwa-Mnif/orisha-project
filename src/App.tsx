import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";

export default function App() {
  return (
    <>
      <Header />
      <div className="tw-bg-blue-500 tw-text-white tw-p-4 tw-rounded">
        React + Tailwind fonctionne !
      </div>
      <Footer />
    </>
  );
}
