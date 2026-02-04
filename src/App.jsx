import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

import Home from "./pages/Home";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 flex flex-col">
      <Navbar />

      <main className=".flex-grow {flex-grow: 1}">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
