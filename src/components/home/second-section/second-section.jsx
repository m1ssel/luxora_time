import React from 'react'

import BannerComponent from '../../banner-comp/banner-component';
import MenBanner from '../../../assets/images/men-banner.jpg'
import WomenBanner from '../../../assets/images/women-banner.jpg'

import './second-section.scss'

const SecondSection = () => {
  return (
    <div className='second-section-container'>
      <div className='choose-container'>
          <BannerComponent 
            Banner={MenBanner}
            MainText="Men's Best Sellers"
            SecondaryText="Shop Now"
          />
          <BannerComponent 
            Banner={WomenBanner}
            MainText="Women's Best Sellers"
            SecondaryText="Shop Now"
          />
      </div>
    </div>
  )
}

export default SecondSection