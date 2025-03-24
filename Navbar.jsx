import React from 'react';
import './Navbar.css'; 
import Signin from './Signin';
import Signup from './Signup';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
      <img src="https://cdn.vectorstock.com/i/1000v/16/74/letter-ss-logo-design-template-s-vector-40701674.jpg"alt="Logo" class="circle-logo"/>

        <a href="#" className="company-name">Shoppers Stop</a>

      </div>
      <a 
            className="nav-link mx-auto fs-5 me-3 text-white" 
            href="Product.jsx" 
            onClick={() => onNavigate('Home')}
          >Home</a>
      <a 
            className="nav-link mx-auto fs-5 me-3 text-white" 
            href="Product.jsx" 
            onClick={() => onNavigate('Products')}
          >Products</a>

      <div className="navbar-center">
        <input type="text" className="search-input" placeholder="Search..." />
      </div>
      <div className="navbar-right">
        <a href="Signin" className="signin-button">Sign In</a>
        <a href='Signup' className="signup-button">Sign up</a>
    
      </div>
    </nav>
  );
};

export default Navbar;