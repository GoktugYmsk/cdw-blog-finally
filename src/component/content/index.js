import React from 'react'
import { FaChevronRight } from "react-icons/fa"

import './index.css'

function Content({ selected, isHamburger }) {
  return (
    <div>
      <div className={`selectedbox ${isHamburger ? '' : 'selectedOpacity'}`} >
        <h3 className='h3' >{selected.date}</h3>
        <h1 className='h1' >{selected.name}</h1>
      </div>
      <p className={`typeSelected ${isHamburger ? '' : 'typeOpacity'}`} >{selected.type}</p>
      <p className={`seeProject ${isHamburger ? '' : 'seeOpacity'}`}>See project
        <FaChevronRight className='chevron' style={{ color: 'white' }} /></p>
    </div>
  )
}

export default Content
