import Header from "../components/Header";
import Footer from "../components/Footer";
import PokemonList from "../components/PokemonList";
import React from "react";
export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex flex-1 p-4 gap-4">
        <aside className="w-1/4"></aside>
        <section className="flex-1 flex flex-col gap-4">
          <PokemonList />
        </section>
      </main>

      <Footer />
    </div>
  );
}
