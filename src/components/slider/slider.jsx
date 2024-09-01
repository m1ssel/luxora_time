import React, { useState, useEffect } from 'react'

import db from '../../assets/db.json'

const SliderComp = ({Image}) => {
    const [brands, setBrands] = useState([]);

    useEffect(() => {
        const uniqueBrands = [...new Set(db.map(item => item.brand))];
        setBrands(uniqueBrands);
    }, []);
  return (
    <>
        {brands.map((brand, index, img) => (
            <div key={index} className='image-container'>
                <img src={Image} alt={index} className='image-item' />
                <p className='brand-text'>{brand}</p>
            </div>
        ))}
    </>
  )
}

export default SliderComp