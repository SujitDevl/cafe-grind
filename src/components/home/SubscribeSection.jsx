import Container from "../layout/Container";
import React from "react";

function SubscribeSection() {
  return (
    <section className="py-16 bg-amber-900 text-white">
      <Container>
        <div className="text-center max-w-xl mx-auto">
          <h2 className="text-2xl font-bold mb-3">Join the Coffee Club</h2>
          <p className="mb-6">
            Get the latest brews, promotions, and café updates straight to your
            inbox.
          </p>

          <div className="flex justify-center gap-2">
            <input
              type="email"
              placeholder="Your email"
              className="px-4 py-2 rounded-l-md text-stone-900 w-full"
            />
            <button className="bg-white text-amber-900 px-6 py-2 rounded-r-md font-semibold">
              Subscribe
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default SubscribeSection;
