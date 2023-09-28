import React from "react";
import Button from "../components/Button";

const HeroBlock: React.FC = () => {
  return (
    <div className='hero-block container'>
      <div>
        <h1>Пицца на заказ</h1>
        <p className='accent'>
          Бесплатная и быстрая доставка за час в любое удобное для вас время
        </p>
        <Button className='hero-block__button' text='Выбрать пиццу' />
      </div>
      <img
        src='.\images\HeroBlockPizza.png'
        className='hero-block__image'
        alt='pizza'
      />
    </div>
  );
};
export default HeroBlock;
