import React, { useRef, useState, useEffect } from 'react'

import { useNavigate } from 'react-router-dom';
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import Slider from "react-slick";
import db from '../../../assets/db.json'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './third-section.scss'

const ThirdSection = () => {
    const [brands, setBrands] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const uniqueBrands = [...new Set(db.map(item => item.brand))];
        setBrands(uniqueBrands);
    }, []);

    const sliderRef = useRef(null);

    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 3,
        speed: 500,
        arrows: false,
        draggable: false,
      };

      const handlePrev = () => {
        sliderRef.current.slickPrev();
      };
    
      const handleNext = () => {
        sliderRef.current.slickNext();
      };

      const handleItemClick = (brand) => {
        navigate(`/shop/${brand}`)
      };

      const imageMap = {
        'Patek Philippe': require('../../../assets/images/PP.jpg'),
        'Rolex': require('../../../assets/images/Rolex.jpg'),
        'Omega': require('../../../assets/images/Omega.jpg'),
        'Audemars Piguet': require('../../../assets/images/AP.webp'),
        'Vacheron Constantin': require('../../../assets/images/VC.webp'),
      };

  return (
    <div className='third-section-container'>
        <div className='head-container'>
            <div className='text-container'>
                <h2 className='main-text'>More to Love</h2>
                <p className='secondary-text'>You don't want to miss these</p>
            </div>
            <div className='buttons-container'>
                <button className='arrow-container' onClick={handlePrev}> <BsArrowLeftShort className='arrow' /> </button>
                <button className='arrow-container' onClick={handleNext}> <BsArrowRightShort className='arrow' /> </button>
            </div>
        </div>
        <Slider ref={sliderRef} {...settings} className='slider'>
            {brands.map((brand, index, img) => (
                <div key={index} className='item-container' onClick={() => handleItemClick(brand)}>
                    <div className='image-container'> <img src={imageMap[brand]} alt={index} className='image-item' /> </div>
                    <p className='brand-text'>{brand}</p>
                </div>
            ))}
        </Slider>
    </div>
  )
}

export default ThirdSection