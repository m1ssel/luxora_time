import React from 'react'

import './checkout-page.scss'

const CheckoutPage = () => {
  return (
    <div className='checkout-container'>
        <div className='order-section-container'>
            <div className='order-section'>
                <div className='contact-container'>
                    <div className='contact-group'>
                        <h2 className='contact-text'>Contact</h2>
                        <a href="/" className='log-in-link'>Log In</a>
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
                <div className='item-container'></div>
                <div className='other-container'>
                    <div className='discount-container'>
                        <input type="text" placeholder='Discount code' className='discount-input'/>
                        <button className='discount-btn'>Apply</button>
                    </div>
                    <div className='pricing-container'>
                        <div className='pricing-section'>
                            <p className='pricing-item'>Subtotal (1 item)</p>
                            <p className='pricing-item'>$19,888.00</p>
                        </div>
                        <div className='pricing-section'>
                            <p className='pricing-item'>Shipping</p>
                            <p className='pricing-item'>Enter shipping address</p>
                        </div>
                        <div className='pricing-section bold-section'>
                            <b className='pricing-item'>Total</b>
                            <b className='pricing-item'>$19,888.00</b>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CheckoutPage