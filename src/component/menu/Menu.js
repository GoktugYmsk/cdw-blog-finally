import React from 'react'
import { FaInstagram, FaFacebook, FaTwitterSquare, FaYoutube } from "react-icons/fa";
import '../menu/menu.css'
import image6 from '../../img/border-logo.png'

function Menu() {
    return (
        <div>
            <div className='chat' >
                <img src={image6} ></img>
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
            </div>
        </div>
    )
}

export default Menu
