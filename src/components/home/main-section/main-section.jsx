import React from 'react'
import { Link } from 'react-router-dom'

import WatchesBanner from '../../../assets/images/banner1.jpg'

import './main-section.scss'

const MainSection = () => {
  return (
    <div className="banner-container">
        <div className='banner-text-container'>
            <div className='banner-main-text'> Buy for your own </div>
            <Link to="./shop" className='banner-link'>Shop now</Link>
        </div>
        <img src={WatchesBanner} alt="asd" className='banner-img'/>
    </div>
  )
}

export default MainSection