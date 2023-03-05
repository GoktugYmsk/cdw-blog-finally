import React, { useState } from 'react';
import './index.css';
import image4 from "../../img/cdw.svg"

function Header({allHamburger,isHamburger}) {


  return (
    <div onClick={allHamburger} >
      <img className={`cdw ${isHamburger ? '' : 'cdwActive'}`} src={image4} alt="logo" />
      <button className={`hamburger ${isHamburger ? '' : 'hamburger-active'}`}>
        <div className="hamburger-line" />
        <div className="hamburger-line" />
        <div className="hamburger-line" />
      </button>
      <div className={`solbar ${isHamburger ? '' : 'hamburger-active'}`} ></div>
      <div className={`container ${isHamburger ? '' : 'hamburger-active'}`}>  
      </div>
    </div>
  )
}
export default Header;


/* 

1: her şey inilizce olmalı,
2: component isimlerini index olarak değiştir,
3: componentleri olabildiğince sade bir hale getir

*/