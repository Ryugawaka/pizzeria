import React, { useState } from "react";
import { data } from "../mocks/pizza";
import PizzaCard from "../components/PizzaCard";
import { filters } from "../mocks/filters";

const Catalog: React.FC = () => {
  const [filter, setFilter] = useState("all");
  return (
    <div className='container catalog'>
      <h2>Выберите пиццу</h2>
      <div className='catalog__filter'>
        {filters.map((f, i) => (
          <div
            className={filter === f.type ? "catalog__filter__active" : ""}
            key={i}
            onClick={() => setFilter(f.type)}
          >
            <p className={"catalog__filter__button"}>{f.name}</p>
            {f.logo}
          </div>
        ))}
      </div>
      <div className='catalog__items'>
        {filter === "all"
          ? data.map((p) => (
              <PizzaCard
                key={p.name}
                name={p.name}
                img={p.img}
                description={p.description}
                prices={p.prices}
                filters={p.filters}
              />
            ))
          : data
              .filter((i) => i.filters[0] === filter)
              .map((p) => (
                <PizzaCard
                  key={p.name}
                  name={p.name}
                  img={p.img}
                  description={p.description}
                  prices={p.prices}
                  filters={p.filters}
                />
              ))}
      </div>
    </div>
  );
};

export default Catalog;
