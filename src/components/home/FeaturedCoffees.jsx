import Container from "../layout/Container";
import CoffeeCard from "../coffee/CoffeeCard";
import coffees from "../../data/coffees";
import React from "react";

function FeaturedCoffees() {
  const featured = coffees.slice(0, 4);

  return (
    <section className="py-20 bg-stone-50">
      <Container>
        <h2 className="text-3xl font-bold text-center mb-6">Popular Picks</h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((coffee) => (
            <div key={coffee.id}>
              <CoffeeCard
                name={coffee.name}
                description={coffee.description}
                price={coffee.price}
                onAddToCart={() => {}}
              />
              <p className="text-sm text-center text-stone-500 mt-2">
                {coffee.category.toUpperCase()}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default FeaturedCoffees;
