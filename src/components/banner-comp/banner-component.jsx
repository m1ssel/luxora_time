import React from 'react'

import { BsArrowRightShort } from "react-icons/bs";

const BannerComponent = ({ Banner, MainText, SecondaryText }) => {
  return (
    <div className='choose-block'>
        <img src={Banner} alt="banner" className='choose-banner'/>
        <div className='choose-internal-text'>
            <div className='choose-text-container'>
                <h4 className='choose-main-text'>{MainText}</h4>
                <p className='choose-text'>{SecondaryText}</p>
            </div>
            <div className='arrow-container'> <BsArrowRightShort className='arrow-img' /> </div>
        </div>
    </div>
  )
}

export default BannerComponent