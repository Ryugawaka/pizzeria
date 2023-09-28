import React from "react";
import { promotions } from "../mocks/pizza";

const Promotion: React.FC = () => {
  return (
    <div className='promotion container'>
      {promotions.map((p) => (
        <div key={p.title} className='promotion__element'>
          <img src={p.img} alt='promotion' />
          <h4>{p.title}</h4>
          <p>{p.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Promotion;
