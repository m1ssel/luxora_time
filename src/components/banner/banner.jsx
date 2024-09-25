import React from 'react'
import { Link } from 'react-router-dom';

import { BsArrowRightShort } from "react-icons/bs";

import './banner.scss'

const BannerComponent = ({ Banner, MainText, SecondaryText, LinkRoute }) => {
  return (
    <Link to={`/shop/${LinkRoute}`} className='choose-block'>
        <img src={Banner} alt="banner" className='choose-banner'/>
        <div className='choose-internal-text'>
            <div className='choose-text-container'>
                <h4 className='choose-main-text'>{MainText}</h4>
                <p className='choose-text'>{SecondaryText}</p>
            </div>
            <div className='arrow-container'> <BsArrowRightShort className='arrow-img' /> </div>
        </div>
    </Link>
  )
}

export default BannerComponent