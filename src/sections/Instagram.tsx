import React from "react";

const InstagramBlock: React.FC = () => {
  return (
    <div className='instagram'>
      <h2>Следите за нами в Instagram</h2>
      <h4>@pizzamenu</h4>
      <div className='instagram__photos'>
        <img
          className='instagram__mobile'
          src='./images/inst1.png'
          alt='instagram'
        />
        <img
          className='instagram__mobile'
          src='./images/inst2.png'
          alt='instagram'
        />
        <img
          className='instagram__mobile'
          src='./images/inst3.png'
          alt='instagram'
        />
        <img
          className='instagram__mobile'
          src='./images/inst4.png'
          alt='instagram'
        />
        <img
          className='instagram__tablet'
          src='./images/inst5.png'
          alt='instagram'
        />
        <img
          className='instagram__tablet'
          src='./images/inst6.png'
          alt='instagram'
        />
        <img
          className='instagram__desctop'
          src='./images/inst7.png'
          alt='instagram'
        />
        <img
          className='instagram__desctop'
          src='./images/inst8.png'
          alt='instagram'
        />
        <img
          className='instagram__desctop'
          src='./images/inst9.png'
          alt='instagram'
        />
        <img
          className='instagram__desctop'
          src='./images/inst10.png'
          alt='instagram'
        />
      </div>
    </div>
  );
};
export default InstagramBlock;
