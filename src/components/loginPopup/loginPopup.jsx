import React, { useState, useContext } from 'react';
import { StoreContext } from '../../context/StoreContext';
import './loginPopup.scss';

const LoginPopup = ({ setShowLogin }) => {
  const { registerUser, loginUser } = useContext(StoreContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoginForm, setIsLoginForm] = useState(true); // Локальное состояние для переключения формы

  const handleRegister = () => {
    if (!email || !password || !name) {
      setErrorMessage('Please fill in all fields.');
      return;
    }

    const userInfo = { email, password, name };
    registerUser(userInfo);
    setShowLogin(false);
  };

  const handleLogin = () => {
    const success = loginUser(email, password);
    if (success) {
      setShowLogin(false);
    } else {
      setErrorMessage('Invalid email or password.');
    }
  };

  const toggleForm = () => {
    setErrorMessage('');
    setEmail('');
    setPassword('');
    setName('');
    setIsLoginForm((prev) => !prev); // Меняет форму логина на регистрацию и обратно
  };

  return (
    <div className="login-popup">
      <div className="popup-content">
        <h2>{isLoginForm ? 'Login' : 'Register'}</h2>
        {!isLoginForm && (
          <input 
            type="text" 
            placeholder="Name" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
          />
        )}
        <input 
          type="email" 
          placeholder="Email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
        />
        <input 
          type="password" 
          placeholder="Password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
        />

        {errorMessage && <p className="error-message">{errorMessage}</p>}

        <div className="popup-actions">
          {isLoginForm ? (
            <>
              <button onClick={handleLogin}>Login</button>
              <p>
                Don't have an account? <span onClick={toggleForm}>Click here</span>
              </p>
            </>
          ) : (
            <>
              <button onClick={handleRegister}>Register</button>
              <p>
                Already have an account? <span onClick={toggleForm}>Login here</span>
              </p>
            </>
          )}
        </div>
        <button className="close-popup" onClick={() => setShowLogin(false)}>Close</button>
      </div>
    </div>
  );
};

export default LoginPopup;




// import React, { useState } from 'react'

// import { BsXLg } from "react-icons/bs";

// import './loginPopup.scss'

// const LoginPopup = ({ setShowLogin, isLoginForm }) => {
//     const [currState, setCurrState] = useState(isLoginForm ? "Login" : "Sign Up");
  
//     return (
//       <div className='login-popup'>
//           <form className='login-popup-container'>
//               <div className='login-popup-title'>
//                   <h2>{currState}</h2>
//                   <BsXLg className='cross-icon' onClick={() => setShowLogin(false)} />
//               </div>
//               <div className='login-popup-fields'>
//                   {currState === "Login" ? null : <input type="text" placeholder='Your Name' required />}
//                   <input type="email" placeholder='Your Email' required />
//                   <input type="password" placeholder='Your Password' required />
//               </div>
//               <button>{currState === "Sign Up" ? "Create account" : "Login"}</button>
//               <div className='login-popup-condition'>
//                   <input type="checkbox" required />
//                   <p>By continuing, I agree to the terms of use privacy & policy</p>
//               </div>
//               {currState === "Login"
//                   ? <p>Create a new account? <span onClick={() => setCurrState("Sign Up")}>Click here</span></p>
//                   : <p>Already have an account? <span onClick={() => setCurrState("Login")}>Login here</span></p>
//               }
//           </form>
//       </div>
//     );
//   };
  
//   export default LoginPopup;
  
