import React from "react";
import Logo from "../assets/svg/Logo";
import Phone from "../assets/svg/Phone";
import Cart from "../assets/svg/Cart";
import Drawer from "../assets/svg/Drawer";
import Cross from "../assets/svg/Cross";

const Header: React.FC = () => {
  return (
    <div className='header container'>
      <Logo className='header__logo' />
      <div className='header__navigation'>
        <div className='header__navigation__button'>Меню</div>
        <div className='header__navigation__button'>О нас</div>
        <div className='header__navigation__button'>Контакты</div>
      </div>
      <div className='header__info'>
        <div>
          <Phone width={40} height={40} />
          <span>
            <p>+7 (918) 432-65-87</p>
            <p className='description'>Ежедневно с 9:00 до 23:00</p>
          </span>
        </div>
        <div>
          <Cart width={40} height={40} />
          <span>
            <p>Ваш заказ</p>
            <p className='description'></p>
          </span>
        </div>
      </div>
      <Drawer className='header__drawer__icon' />
    </div>
  );
};

export default Header;
