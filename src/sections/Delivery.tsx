import React from "react";
import HeadPhones from "../assets/svg/HeadPhones";
import DeliveryIcon from "../assets/svg/Delivery";
import Pay from "../assets/svg/Pay";

type DeliveryCardProps = {
  title: string;
  descriprion: string;
  svg: JSX.Element;
};

const DeliveryCard: React.FC<DeliveryCardProps> = (props) => {
  const { title, descriprion, svg } = props;
  return (
    <div className='delivery__card'>
      {svg}
      <span>
        <h4>{title}</h4>
        <p className='description'>{descriprion}</p>
      </span>
    </div>
  );
};

const Delivery: React.FC = () => {
  return (
    <div className='delivery container'>
      <h2>Доставка и оплата</h2>
      <div className='delivery__cards'>
        <DeliveryCard
          svg={<HeadPhones />}
          title='Заказ'
          descriprion='После оформления заказа мы свяжемся с вами для уточнения деталей.'
        />
        <DeliveryCard
          svg={<DeliveryIcon />}
          title='Доставка курьером'
          descriprion='Мы доставим вашу пиццу горячей. Бесплатная доставка по городу.'
        />
        <DeliveryCard
          svg={<Pay />}
          title='Оплата'
          descriprion='Оплатить можно наличными или картой курьеру. И золотом тоже можно.'
        />
      </div>
    </div>
  );
};

export default Delivery;
