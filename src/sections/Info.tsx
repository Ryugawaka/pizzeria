import React from "react";

const InfoSection: React.FC = () => {
  return (
    <div className='container info-block'>
      <div className='info-block__section'>
        <img src='.\images\about01.png' alt='about' />
        <div className='info-block__section__description'>
          <h3>Изготавливаем пиццу по своим рецептам в лучших традициях</h3>
          <p>
            Наша пицца получается сочной, вкусной и главное хрустящей с нежной и
            аппетитной начинкой, готовим по своим итальянским рецептам
          </p>
        </div>
      </div>
      <div className='info-block__section second'>
        <div className='info-block__section__description'>
          <h3>Используем только свежие ингридиенты</h3>
          <p>
            Ежедневно заготавливаем продукты и овощи для наших пицц, соблюдаем
            все сроки хранения
          </p>
        </div>
        <img src='.\images\about02.png' alt='about2' />
      </div>
      <div className='info-block__section'>
        <img src='.\images\about03.png' alt='about3' />
        <div className='info-block__section__description'>
          <h3>Доставка в течение 60 минут или заказ за нас счёт</h3>
          <p>
            Все наши курьеры – фанаты серии Need for Speed и призеры гонок World
            Rally Championship и World Superbike во всех категориях
          </p>
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
