import React, { useContext } from 'react';
import { Outlet, Link, useNavigate } from "react-router-dom";
import { BsPerson } from "react-icons/bs";
import Dropdown from "../../components/dropdown/dropdown";
import CartDropdown from '../../components/cart-dropdown/cart-dropdown';
import Logo from '../../assets/images/logo-black.png';
import { StoreContext } from '../../context/StoreContext'; // Импортируем контекст

import "./navigation.scss";

const Navigation = ({ setShowLogin, setIsLoginForm }) => {
  const { isAuthenticated, user, logoutUser } = useContext(StoreContext); // Доступ к контексту
  const navigate = useNavigate();

  const handleLogout = () => {
    logoutUser();
    navigate('/'); // Перенаправление на главную страницу после выхода
  };

  return (
    <>
      <header>
        <div className="nav-bar">
          <div className="nav-left"></div>
          <div className="nav-middle">
            <Link to={"/"} className="middle-text">Luxora Time</Link>
          </div>
          <div className="nav-right">
            <Link to={'/profile'} className="nav-link-container">
              <div className="profile-text">Profile</div>
              <div className="profile-container">
                <BsPerson className="profile-img" />
              </div>
            </Link>
            <CartDropdown />
            <Dropdown />
          </div>
        </div>
      </header>
      <Outlet />
    </>
  );
};

export default Navigation;




// import React from 'react'

// import { Outlet, Link } from "react-router-dom";

// import { BsPerson } from "react-icons/bs";
// import Dropdown from "../../components/dropdown/dropdown";
// import CartDropdown from '../../components/cart-dropdown/cart-dropdown';
// import Logo from '../../assets/images/logo-black.png';

// import "./navigation.scss";

// const Navigation = ({ setShowLogin, setIsLoginForm }) => {
//   return (
//     <>
//       <header>
//         <div className="nav-bar">
//           <div className="nav-left"></div>
//           <div className="nav-middle">
//             <Link to={"/"} className="middle-text">Luxora Time</Link>
//           </div>
//           <div className="nav-right">
//             <div className="nav-link-container">
//               <div className="profile-text" onClick={() => { setIsLoginForm(false); setShowLogin(true); }}>Sign Up</div>
//               <div className="profile-container">
//                 <BsPerson className="profile-img" />
//               </div>
//             </div>
//             <CartDropdown />
//             <Dropdown />
//           </div>
//         </div>
//       </header>
//       <Outlet />
//     </>
//   );
// };

// export default Navigation;

