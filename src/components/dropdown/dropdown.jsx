import React, { useState, useEffect } from 'react';

import { useNavigate } from 'react-router-dom';
import { BsXLg, BsList } from "react-icons/bs";
import db from '../../assets/db.json';

import './dropdown.scss';

const Dropdown = () => {
    const [brands, setBrands] = useState([]);
    const [isClassActive, setIsClassActive] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const uniqueBrands = [...new Set(db.map(item => item.brand))];
        setBrands(uniqueBrands);
    }, []);

    const handleItemClick = (brand) => {
        navigate(`/shop/${brand}`)
        setIsClassActive(false);
    };
    const toggleClass = () => setIsClassActive(!isClassActive);

    return (
        <>
            <BsList className="list-icon" onClick={toggleClass} />
            <div className='dropdown-container'>
                <div className={`dropdown-menu ${isClassActive ? 'active' : ''}`}>
                    <div className='close-container'>
                        <a className='close-link' onClick={toggleClass}>
                            <strong className='close-text'>Close</strong>
                            <span className='close-icon-container'>
                                <BsXLg className='close-icon' />
                            </span>
                        </a>
                    </div>
                    <div className='dropdown-list-container'>
                        <ul className='dropdown-list'>
                            {brands.map((brand, index) => (
                                <li className='dropdown-list-item' key={index} onClick={() => handleItemClick(brand)}>
                                    <a className='list-item'>{brand}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Dropdown;
