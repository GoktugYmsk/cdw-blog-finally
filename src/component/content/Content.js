import React from 'react'
import './content.css'
import {FaChevronRight} from "react-icons/fa"

function Content({ selected }) {
  return (
    <div>
      <div className="selectedbox" >
        <h3 className='h3' >{selected.date}</h3>
        <h1 className='h1' >{selected.name}</h1>
      </div>
      <p className='typeSelected' >{selected.type}</p>
      <p className='seeProject'>See project
      
      <FaChevronRight className='chevron' style={{color: 'white'}} /></p>
    </div>
  )
}

export default Content
