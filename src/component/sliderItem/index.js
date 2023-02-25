import React from 'react'
import './index.css'

function SliderItem({ item, handleItem }) {
    return (
        <div className="item" onClick={() => handleItem(item)} >
            <p className="content-id">{item.id}</p>
            <p className="content-name">{item.name}</p>
            <hr className={item?.selected ? "item-selected" : "empty"} />
        </div>
    )
}
export default SliderItem
