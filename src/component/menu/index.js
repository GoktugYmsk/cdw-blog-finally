import React from 'react'
import { FaInstagram, FaFacebook, FaTwitterSquare, FaYoutube } from "react-icons/fa";

import borderLogo from '../../assets/img/border-logo.png'

import '../menu/index.css'

function Menu({ isHamburger, allHamburger }) {
    return (
        <div onClick={allHamburger} >
            <div className={`chat ${isHamburger ? '' : 'chatActive'}`} >
                <img src={borderLogo} />
                <p className='pone' >Home</p>
                <p className='ptwo'>About Us</p>
                <p className='pthree'>Projects</p>
                <p className='pfour'>Contact</p>
                <div className='icons' >
                    <FaInstagram className='instagram' />
                    <FaFacebook style={{ color: 'white' }} className='facebook' />
                    <FaTwitterSquare style={{ color: 'white' }} className='twitter' />
                    <FaYoutube style={{ color: 'white' }} className='youtube' />
                </div>
                <button class="close">&times;</button>
            </div>
        </div>
    )
}

export default Menu