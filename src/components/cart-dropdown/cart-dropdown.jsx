import React, { useState, useEffect, useContext } from 'react'

import { useNavigate } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';

import { BsCart2, BsXLg, BsArrowRightShort, BsPlus, BsDash } from "react-icons/bs";


import './cart-dropdown.scss'

const CartDropdown = () => {
    const {cartItems, db, removeFromCart, addToCart, updateTotalAmount } = useContext(StoreContext)
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

    const totalAmount = db.reduce((total, item) => {
        if (cartItems[item.id] > 0) {
            return total + (item.price * cartItems[item.id]);
        }
        return total;
    }, 0);

    const formattedTotalAmount = totalAmount.toLocaleString('en');

    useEffect(() => {
        updateTotalAmount(totalAmount);
    }, [totalAmount, updateTotalAmount]);

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
                        {db.map((item)=> {
                            if(cartItems[item.id]>0) {
                                const totalPrice = item.price * cartItems[item.id];
                                const formattedPrice = totalPrice.toLocaleString('en');
                                return (
                                    <div className='cart-product'>
                                        <img src={item.img} alt={item.id} className='cart-product-img'/>
                                        <div className='cart-product-info'>
                                            <div className='cart-product-specific'>
                                                <h4 className='cart-product-name'>{item.name}</h4>
                                                <p className='cart-product-color'>{item.color}</p>
                                            </div>
                                            <div className='cart-product-price-container'>
                                                <div className='cart-product-quantity'>
                                                    <BsDash className='quantity-changer' onClick={()=>removeFromCart(item.id)}/>
                                                    <p className=''>{cartItems[item.id]}</p>
                                                    <BsPlus className='quantity-changer' onClick={()=>addToCart(item.id)}/>
                                                </div>
                                                <p className='cart-product-price'>${formattedPrice}</p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                        })}
                    </div>
                    <div className='total-section'>
                        <div className='total-container'>
                            <p className='total-text'>Subtotal:</p>
                            <p className='total-price'>${formattedTotalAmount}</p>
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