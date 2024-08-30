import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

import { BsXLg } from "react-icons/bs";
import { BsList } from "react-icons/bs";
import { Fragment } from 'react';

import './dropdown.scss'

const Dropdown = () => {
    const navigate = useNavigate();

    const handleItemClick = (brand) => {
        navigate(`/shop/${brand}`);
    };

    const [isClassActive, setIsClassActive] = useState(false);

  // Функция для переключения состояния
    const toggleClass = () => {
        setIsClassActive(prevState => !prevState);
    };
return (
    <>
        <BsList className="list-icon" onClick={toggleClass}/>
        <div className='dropdown-container'>
            <div className={`dropdown-menu ${isClassActive ? 'active' : ''}`}>
                <div className='close-container'>
                    <a className='close-link'>
                        <strong className='close-text'>Close</strong>
                        <span className='close-icon-container'> <BsXLg className='close-icon' onClick={toggleClass}/> </span>
                    </a>
                </div>
                <div className='dropdown-list-container'>
                    <ul className='dropdown-list'>
                        <li className='dropdown-list-item' onClick={() => handleItemClick('Patek Philippe')}>
                            <a href="" className='list-item'>Patek Philippe</a>
                        </li>
                        <li className='dropdown-list-item' onClick={() => handleItemClick('Rolex')}>
                            <a href="" className='list-item'>Rolex</a>
                        </li>
                        <li className='dropdown-list-item' onClick={() => handleItemClick('Omega')}>
                            <a href="" className='list-item'>Omega</a>
                        </li>
                        <li className='dropdown-list-item' onClick={() => handleItemClick('Audemars Piguet')}>
                            <a href="" className='list-item'>Audemars Piguet</a>
                        </li>
                        <li className='dropdown-list-item' onClick={() => handleItemClick('Vacheron Constantin')}>
                            <a href="" className='list-item'>Vacheron Constantin</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </>
    
  )
}

export default Dropdown