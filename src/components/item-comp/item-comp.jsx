import React from 'react'

const ItemComponent = ({ MainText, Img, SecondaryText }) => {
  return (
    <div className='item-container'>
        <h4 className='itemMainText' >{MainText}</h4>
        <div className='img-container'> <Img className='itemImg' /> </div>
        <p className='itemText' >{SecondaryText}</p>
    </div>
  )
}

export default ItemComponent