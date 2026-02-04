import React from "react";
import Container from "./Container";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-stone-100 border-t border-stone-200 mt-16">
      <Container>
        <div className="py-10 flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Left */}
          <div className="text-center md:text-left">
            <h2 className="text-xl font-bold text-amber-900">Cafe Grind ☕</h2>
            <p className="text-stone-600 text-sm mt-1">
              Fresh coffee, calm vibes.
            </p>
          </div>
        </div>

        <div className="text-center text-sm text-stone-500 pb-6">
          © {new Date().getFullYear()} Cafe Grind. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
