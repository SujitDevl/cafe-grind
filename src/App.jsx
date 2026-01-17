import Container from "./components/layout/Container";
import React from "react";
import Navbar from "./components/layout/Navbar";
import Hero from "./components/Home/Hero";

function App() {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-900">
      <Navbar />
      <Hero />
    </div>
  );
}

export default App;
