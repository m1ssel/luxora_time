import React, { useContext } from 'react';

import { StoreContext } from '../../context/StoreContext';

import './checkout.scss'

const CheckoutPage = () => {
  const { db, cartItems, formattedTotalAmount } = useContext(StoreContext);
  const subtotalPrice = 10
  const formattedTotalNumber = parseFloat(formattedTotalAmount.replace(/,/g, ''));
  const totalPrice = formattedTotalNumber + subtotalPrice
  const formattedTotalPrice = totalPrice.toLocaleString('en')
  return (
    <div className='checkout-container'>
        <div className='order-section-container'>
            <div className='order-section'>
                <div className='contact-container'>
                    <div className='contact-group'>
                        <h2 className='contact-text'>Contact</h2>
                        {/* <a className='log-in-link' onClick={() => { setIsLoginForm(true); setShowLogin(true); }}>Log In</a> */}
                    </div>
                    <input type="text" placeholder='Email' className='email-input'/>
                    <p className='mailing-text'>Email me with news and offers</p>
                </div>
                <div className='delivery-container'>
                    <h2 className='delivery-text'>Delivery</h2>
                    <form action="" className='form-container'>
                        <input type="text" placeholder='Country/Region' className='country-input'/>
                        <div className='name-container'>
                            <input type="text" placeholder='First name'className='first-name-input'/>
                            <input type="text" placeholder='Last name'className='last-name-input'/>
                        </div>
                        <input type="text" placeholder='Company (optional)' className='company-input'/>
                        <input type="text" placeholder='Address' className='address-input'/>
                        <input type="text" placeholder='Apartment, suite, etc. (optional)' className='apartment-input'/>
                        <div className='city-container'>
                            <input type="text" placeholder='City' className='city-input'/>
                            <input type="text" placeholder='State' className='state-input'/>
                            <input type="text" placeholder='ZIP code' className='zip-code-input'/>
                        </div>
                        <input type="text" placeholder='Phone' className='phone-input'/>
                    </form>
                    <p className='save-text'>Save this information for next time</p>
                </div>
                <div className='shipping-container'>
                    <h3 className='shipping-head'>Shipping method</h3>
                    <div className='shipping-text'>Enter your shipping address to view available shipping methods.</div>
                </div>
                <div className='payment-container'>
                    <h2 className='payment-head'>Payment</h2>
                    <p className='payment-text'>All transactions are secure and encrypted.</p>
                    <div className='payment-card'>Credit card</div>
                </div>
                <div className='billing-container'>
                    <h3 className='billing-head'>Billing address</h3>
                    <div className='billing-text'>Same as shipping address</div>
                </div>
                <div className='pay-container'>
                    <a className='pay-now'>Pay now</a>
                </div>
                <div className='checkout-footer'>
                    <a href="/" className='checkout-footer-text'>Refund Policy</a>
                    <a href="/" className='checkout-footer-text'>Privacy policy</a>
                    <a href="/" className='checkout-footer-text'>Terms of service</a>
                </div>
            </div>
        </div>
        <div className='order-info-section-container'>
            <div className='order-info-section'>
                <div className='item-container'>
                    {Object.keys(cartItems).map((itemId) => {
                        const item = db.find((product) => product.id === parseInt(itemId));
                        if (item && cartItems[itemId] > 0) {
                            const totalPrice = item.price * cartItems[itemId];
                            const formattedPrice = totalPrice.toLocaleString('en');
                            return (
                            <div className='cart-product' key={item.id}>
                                <img src={item.img} alt={item.id} className='cart-product-img' />
                                <div className='cart-product-info'>
                                <div className='cart-product-specific'>
                                    <h4 className='cart-product-name'>{item.name}</h4>
                                    <p className='cart-product-color'>{item.color}</p>
                                </div>
                                <div className='cart-product-price-container'>
                                    <p className='cart-product-quantity'>Quantity: {cartItems[item.id]}</p>
                                    <p className='cart-product-price'>${formattedPrice}</p>
                                </div>
                                </div>
                            </div>
                            );
                        }
                        return null;
                    })}
                </div>
                <div className='other-container'>
                    <div className='discount-container'>
                        <input type="text" placeholder='Discount code' className='discount-input'/>
                        <button className='discount-btn'>Apply</button>
                    </div>
                    <div className='pricing-container'>
                        <div className='pricing-section'>
                            <p className='pricing-item'>Subtotal (1 item)</p>
                            <p className='pricing-item'>${formattedTotalAmount}</p>
                        </div>
                        <div className='pricing-section'>
                            <p className='pricing-item'>Shipping</p>
                            <p className='pricing-item'>${subtotalPrice}</p>
                        </div>
                        <div className='pricing-section bold-section'>
                            <b className='pricing-item'>Total</b>
                            <b className='pricing-item'>${formattedTotalPrice}</b>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CheckoutPage