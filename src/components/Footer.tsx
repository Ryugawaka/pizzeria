import React from "react";
import Logo from "../assets/svg/Logo";

const Footer: React.FC = () => {
  return (
    <div className='footer container'>
      <Logo fill='white' />
      <div>
        <p className='footer__number'>+7 (918) 432-65-87</p>
        <p className='description'>Ежедневно с 9:00 до 23:00</p>
      </div>
      <p className='description'>Политика конфиденциальности</p>
    </div>
  );
};

export default Footer;
