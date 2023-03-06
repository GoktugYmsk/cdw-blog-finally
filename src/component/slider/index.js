import React from 'react'

import SliderItem from '../sliderItem';

function Slider({ list, handle, hamburger }) {
    return (
        <div className="container">
            {list.map((item) => {
                return (
                    <SliderItem key={item.id} item={item} handleItem={handle} isHamburger={hamburger} />
                );
            })}
        </div>
    )
}

export default Slider
