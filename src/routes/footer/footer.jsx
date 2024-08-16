import React from 'react'
import { Outlet, Link } from "react-router-dom"
import { Fragment } from 'react'

import './footer.scss'

const Footer = () => {
  return (
    <>
        <Outlet />
        <footer>
            <div className='footer-main'>
                <div className='group-container'>
                    <div className='footer-card'>
                        <div className='card-main-text'>Luxora Time</div>
                        <p className='card-info'>
                            Mon - Fri 10:00 am - 8:30 pm <br />
                            Sat Closed - Sun Appointment Only <br />
                            After Hours by Appointment Only <br />
                            *EST Time
                        </p>
                        <p className='card-additional-info'>
                            E: luxoratime@gmail.com <br />
                            T: +48 (98) 920 4291
                        </p>
                    </div>
                    <div className='footer-card'>
                        <div className='card-main-text'>Menu</div>
                        <a href="/" className='card-item'>About Us</a>
                        <a href="/" className='card-item'>Privacy Policy</a>
                        <a href="/" className='card-item'>Service & Warranty</a>
                    </div>
                    <div className='footer-card'>
                        <div className='card-main-text'>Information</div>
                        <a href="/" className='card-item'>Payment Information</a>
                        <a href="/" className='card-item'>Shipping</a>
                        <a href="/" className='card-item'>Contact</a>
                    </div>
                </div>
            </div>
            <div className='footer-secondary'>
                <div className='copyright-container'>Copyright © 2024, Luxora Time, All Rights Reserved.</div>
            </div>
        </footer>
    </>
  )
}

export default Footer