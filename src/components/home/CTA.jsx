import Container from "../layout/Container";
import { Link } from "react-router-dom";
import React from "react";

function CTA() {
  return (
    <section className="py-24 bg-emerald-700 text-white">
      <Container>
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">
            Ready for Your Next Calm Cup?
          </h2>

          <p className="text-emerald-100 mb-8">
            Explore our menu and discover your perfect brew today.
          </p>

          <Link
            to="/menu"
            className="inline-block bg-white text-emerald-700 px-8 py-3 rounded-lg font-medium hover:bg-emerald-100 transition"
          >
            View Menu
          </Link>
        </div>
      </Container>
    </section>
  );
}

export default CTA;
