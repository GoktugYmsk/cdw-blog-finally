import React from 'react';

import cdw from "../../assets/img/cdw.svg"

import './index.css';

function Header({ allHamburger, isHamburger }) {
  return (
    <div onClick={allHamburger} >
      <img className={`cdw ${isHamburger ? '' : 'cdwActive'}`} src={cdw} alt="logo" />
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

