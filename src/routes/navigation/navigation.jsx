import React from 'react'

import { Outlet, Link } from "react-router-dom";

import { BsPerson } from "react-icons/bs";
import Dropdown from "../../components/dropdown/dropdown";
import CartDropdown from '../../components/cart-dropdown/cart-dropdown';
import Logo from '../../assets/images/logo-black.png';

import "./navigation.scss";

const Navigation = () => {
  return (
    <>
      <header>
        <div className="nav-bar">
          <div className="nav-left">
            {/* <img src={Logo} alt="logo" className="logo"/> */}
          </div>
          <div className="nav-middle">
            <Link to={"/"} className="middle-text">Luxora Time</Link>
          </div>
          <div className="nav-right">
            <div className="nav-link-container">
              <div className="profile-text">Profile</div>
              <div className="profile-container"> <BsPerson className="profile-img"/> </div>
            </div>
            <CartDropdown />
            <Dropdown />
          </div>
        </div>
      </header>
      <Outlet/>
    </>
  );
}

export default Navigation;
