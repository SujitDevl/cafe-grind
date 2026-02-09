import React from "react";
import Container from "../layout/Container";

function ImageFeature() {
  return (
    <section className="py-20">
      <Container>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <img
            src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
            alt="Fresh Coffee"
            className="rounded-lg"
          />
          <div>
            <h2 className="text-3xl font-bold text-stone-900 mb-4">
              Exceptional Taste, Every Time
            </h2>

            <p className="text-stone-600 mb-4">
              Our beans are sourced from the best farms — roasted, brewed, and
              poured to give you a coffee experience that feels warm, lively,
              and unforgettable.
            </p>
            <p className="text-stone-600">
              Whether you join us in-store or grab to go, each cup is crafted
              for those who appreciate flavor and community.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default ImageFeature;
