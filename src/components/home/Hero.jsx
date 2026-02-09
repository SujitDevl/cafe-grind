import Container from "../layout/Container";
import React from "react";

function Hero() {
  return (
    <section
      className="bg-cover bg-center py-32"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=1350&q=80')",
      }}
    >
      <div className="bg-black bg-opacity-50 py-20">
        <Container>
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight text-center">
            The Finest Coffee Experience
          </h1>
          <p className="mt-4 text-lg text-gray-200 text-center max-w-2xl mx-auto">
            Handcrafted brews made with passion, flavor, and community vibes.
          </p>
        </Container>
      </div>
    </section>
  );
}

export default Hero;
