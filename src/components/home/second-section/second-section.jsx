import React from 'react'

import BannerComponent from '../../banner/banner';
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
            LinkRoute="Patek%20Philippe"
          />
          <BannerComponent 
            Banner={WomenBanner}
            MainText="Women's Best Sellers"
            SecondaryText="Shop Now"
            LinkRoute="Vacheron%20Constantin"
          />
      </div>
    </div>
  )
}

export default SecondSection