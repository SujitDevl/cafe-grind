import Container from "../layout/Container";
import { Link } from "react-router-dom";
import React from "react";

function CTA() {
  return (
    <section className="py-20 bg-amber-900 text-white">
      <Container>
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">
            Ready for Your Perfect Coffee?
          </h2>
          <p className="mb-8 text-amber-100">
            Explore our menu and find your favorite brew today.
          </p>

          <Link
            to="/menu"
            className="inline-block bg-white text-amber-900 px-6 py-3 rounded-md font-medium hover:bg-amber-100 transition"
          >
            View Menu
          </Link>
        </div>
      </Container>
    </section>
  );
}

export default CTA;
