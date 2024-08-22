import { Outlet, Link } from "react-router-dom"

import { BsCart2 } from "react-icons/bs";
import { BsPerson } from "react-icons/bs";
import { BsSearch } from "react-icons/bs";
import Logo from '../../assets/images/logo-black.png'

import "./navigation.scss"

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
              <div className="nav-link-container">
                <div className="profile-text">Cart</div>
                <div className="cart-container"> <BsCart2 className="cart-img"/> </div>
              </div>
              <div className="search-container">
                <BsSearch className="search-img"/>
              </div>
            </div>
        </div>
      </header>
      <Outlet/>
    </>
  )
}

export default Navigation