import React, { useState } from 'react';
import './header.css';
import image4 from "../../img/cdw.svg"


function Header() {
  const [isHamburger, setIsHamburger] = useState(true)

  function hamburger() {
    document.querySelector('.chat').style.display = 'flex'
    document.querySelector('.hamburger').style.display = 'none'
    document.querySelector('.close-button').style.display = 'flex'
    document.querySelector('.solbar').style.display = 'flex'
    document.querySelector('.selectedbox').style.opacity = 0.4
    document.querySelector('.container').style.opacity = 0.4
    document.querySelector('.typeSelected').style.opacity = 0.4
    document.querySelector('.seeProject').style.opacity = 0.4
    document.querySelector('.cdw').style.opacity = 0.4
    setIsHamburger(false)
  }

  function hamburgerExit() {
    document.querySelector('.chat').style.display = 'none'
    document.querySelector('.hamburger').style.display = 'flex'
    document.querySelector('.close-button').style.display = 'none'
    document.querySelector('.solbar').style.display = 'none'
    document.querySelector('.selectedbox').style.opacity = 1
    document.querySelector('.container').style.opacity = 1
    document.querySelector('.typeSelected').style.opacity = 1
    document.querySelector('.seeProject').style.opacity = 1
    document.querySelector('.cdw').style.opacity = 1
    setIsHamburger(true)
  }

  return (
    <div>
      <img className='cdw' src={image4}></img>
      <button className="hamburger" onClick={hamburger}>
        <div className="hamburger-line" />
        <div className="hamburger-line" />
        <div className="hamburger-line" />
      </button>
      <div className='solbar' ></div>
      <div onClick={hamburgerExit} class="close-button"></div>
    </div>
  )
}
export default Header
