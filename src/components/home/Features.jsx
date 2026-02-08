import Container from "../layout/Container";
import React from "react";
function Features() {
  const features = [
    {
      title: "Premium Beans",
      desc: "Sourced from the finest coffee farms around the world.",
    },
    {
      title: "Freshly Brewed",
      desc: "Every cup is brewed fresh with perfect temperature.",
    },
    {
      title: "Calm Ambience",
      desc: "A peaceful space to work, relax, and enjoy coffee.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <Container>
        <h2 className="text-3xl font-bold text-center mb-12">
          Why Cafe Grind?
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          {features.map((item, index) => (
            <div
              key={index}
              className="p-6 border rounded-lg text-center"
            >
              <h3 className="text-xl font-semibold mb-2">
                {item.title}
              </h3>
              <p className="text-stone-600">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Features;
