import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import db from '../../assets/db.json'

import './shop.scss'

const Shop = () => {

  const [brand, setBrand] = useState('Patek Philippe')

  const handleClick = () => {
    setBrand(prevBrand => prevBrand === 'Patek Philippe' ? 'Rolex' : 'Patek Philippe')
  }

  return (
    <div className='shop'>
      <button className='btn' onClick={handleClick}>Click me</button>
      <div className='shop-container'>
        {
          db.map ( item => {
            if (item.brand == brand) {
              return (
                <Link to={ item.name } className='product' key={ item.id }>
                   <img src={ item.img } className='product-img' />
                   <h3 className='product-brand'> { item.brand } </h3>
                   <h2 className='product-name'> { item.name } </h2>
                   <p className='product-price'> ${ item.price } </p>                
                </Link>
               )
            }
          })
        }
      </div>
    </div>
  )
}

export default Shop