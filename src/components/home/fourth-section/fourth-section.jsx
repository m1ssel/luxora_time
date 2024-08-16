import React from 'react'

import ItemComponent from '../../item-comp/item-comp'
import { BsBoxSeam, BsCreditCard, BsArrowReturnLeft } from "react-icons/bs";

import './fourth-section.scss'

const FourthSection = () => {
  return (
    <div className='fourth-section-container'>
        <ItemComponent 
            MainText="Complimentary Delivery"
            Img={BsBoxSeam}
            SecondaryText="Fully insured, complimentary weekday delivery for all orders"
        />
        <ItemComponent 
            MainText="Interest Free Finance"
            Img={BsCreditCard}
            SecondaryText="0% interest free credit on selected products"
        />
        <ItemComponent 
            MainText="Simple Returns Policy"
            Img={BsArrowReturnLeft}
            SecondaryText="Return your item within 14 days for a full refund"
        />
    </div>
  )
}

export default FourthSection