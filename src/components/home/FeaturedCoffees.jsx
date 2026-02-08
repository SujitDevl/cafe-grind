import Container from "../layout/Container";
import CoffeeCard from "../coffee/CoffeeCard";
import coffees from "../../data/coffees";
import React from "react";

function FeaturedCoffees() {
  const featured = coffees.slice(0, 3);

  return (
    <section className="py-20 bg-stone-50">
      <Container>
        <h2 className="text-3xl font-bold mb-4">
          Featured Coffees
        </h2>
        <p className="text-stone-600 mb-10 max-w-2xl">
          Our customers’ favorite picks, crafted with love.
        </p>

        <div className="grid gap-6 md:grid-cols-3">
          {featured.map((coffee) => (
            <CoffeeCard
              key={coffee.id}
              name={coffee.name}
              description={coffee.description}
              price={coffee.price}
              onAddToCart={() => {}}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}

export default FeaturedCoffees;
