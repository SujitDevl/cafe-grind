import Container from "../layout/Container";
import CoffeeCard from "../coffee/CoffeeCard";
import coffees from "../../data/coffees";
import React from "react";

function FeaturedCoffees() {
  const featured = coffees.slice(0, 3);

  return (
    <section className="py-24 bg-emerald-50">
      <Container>
        <h2 className="text-3xl font-bold mb-4 text-center">
          Signature Brews
        </h2>

        <p className="text-stone-600 text-center mb-12 max-w-xl mx-auto">
          Our most loved coffee and matcha drinks, crafted
          with balance and care.
        </p>

        <div className="grid gap-8 md:grid-cols-3">
          {featured.map((coffee) => (
            <CoffeeCard
              key={coffee.id}
              name={coffee.name}
              description={coffee.description}
              price={coffee.price}
              image={coffee.image}
              onAddToCart={() => {}}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}

export default FeaturedCoffees;
