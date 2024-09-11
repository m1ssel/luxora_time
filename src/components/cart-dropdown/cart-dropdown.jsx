import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';

import { BsCart2, BsXLg, BsArrowRightShort } from "react-icons/bs";

import './cart-dropdown.scss'

const CartDropdown = () => {
    const [isClassActive, setIsClassActive] = useState(false);
    const toggleClass = () => setIsClassActive(!isClassActive);
    const navigate = useNavigate();
    const handleItemClick = () => {
        navigate('/checkout')
        setIsClassActive(false);
    };

    useEffect(() => {
        if (isClassActive) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isClassActive]);
    return (
        <>
            <div className='nav-link-container' onClick={toggleClass} >
                <div className="profile-text">Cart</div>
                <div className="cart-container"> <BsCart2 className="cart-img" /> </div>
            </div>
            {isClassActive && <div className="overlay"></div>}
            <div className='cart-dropdown-container'>
                <div className={`cart-dropdown ${isClassActive ? 'active' : ''}`}>
                    <div className='head-section'>
                        <h2 className='cart-main-text'>Your Cart</h2>
                        <div className='cross-icon-container' onClick={toggleClass}><BsXLg className='cross-icon' /></div>
                    </div>
                    <div className='cart-product-section'>
                        <div className='cart-product'></div>
                    </div>
                    <div className='total-section'>
                        <div className='total-container'>
                            <p className='total-text'>Subtotal:</p>
                            <p className='total-price'>$7.200</p>
                        </div>
                        <a className='checkout-container' onClick={handleItemClick}>
                            <div className='checkout-text'>Checkout</div>
                            <div className='arrow-container'> <BsArrowRightShort className='arrow-img' /> </div>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CartDropdown