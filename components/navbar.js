import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/products">Products</Link>
      <Link to="/cart">Cart</Link>
      <Link to="/checkout">Checkout</Link>
      <Link to="/profile">Profile</Link>
    </nav>
  );
};

export default Navbar;
