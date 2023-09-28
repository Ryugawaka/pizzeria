import React, { useEffect, useState } from "react";
import { PizzaCardProps } from "../mocks/pizza";
import Button from "./Button";
import FilterSpicy from "../assets/svg/FilterSpicy";
import FilterCheese from "../assets/svg/FilterCheese";
import FilterMeat from "../assets/svg/FilterMeat";
import FilterVegan from "../assets/svg/FilterVegan";

const PizzaCard: React.FC<PizzaCardProps> = (props) => {
  const { name, description, prices, img, filters } = props;
  const [size, setSize] = useState(1);

  const filterIcon = (filter: string) => {
    switch (filter) {
      case "spicy":
        return <FilterSpicy />;
      case "cheese":
        return <FilterCheese />;
      case "meat":
        return <FilterMeat />;
      case "vegan":
        return <FilterVegan />;
      default:
        return <></>;
    }
  };
  return (
    <div className='pizza-card'>
      {filters.map((f, index) => (
        <div key={index} className='pizza-card__filter'>
          {filterIcon(f)}
        </div>
      ))}
      <img src={img} alt='pizza' />
      <div className='pizza-card__description'>
        <h4>{name}</h4>
        <p className='description'>{description}</p>
        <p>Размер, см:</p>
        <div className='pizza-card__sizes'>
          <button
            className={size === 0 ? "selected" : ""}
            onClick={() => setSize(0)}
          >
            20
          </button>
          <button
            className={size === 1 ? "selected" : ""}
            onClick={() => setSize(1)}
          >
            30
          </button>
          <button
            className={size === 2 ? "selected" : ""}
            onClick={() => setSize(2)}
          >
            40
          </button>
        </div>
        <p className='pizza-card__price'>от {prices[size]}</p>
        <Button
          className='pizza-card__order'
          text={
            window.innerWidth <= 320
              ? "от " + prices[size].toString() + "p"
              : "Заказать"
          }
        />
      </div>
    </div>
  );
};
export default PizzaCard;
