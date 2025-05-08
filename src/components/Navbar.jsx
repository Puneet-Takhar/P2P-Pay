// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Navbar.css';

const Navbar = () => {
  return (
    <motion.nav
      className="navbar"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 100, damping: 20 }}
    >
      <div className="navbar-container">
        <motion.div
          className="navbar-logo"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link to="/">P2P Pay</Link>
        </motion.div>
        <div className="navbar-links">
          <motion.div
            className="navbar-link"
            whileHover={{ y: -3, color: '#4361ee' }}
            whileTap={{ scale: 0.95 }}
          >
            <Link to="/">Home</Link>
          </motion.div>
          <motion.div
            className="navbar-link"
            whileHover={{ y: -3, color: '#4361ee' }}
            whileTap={{ scale: 0.95 }}
          >
            <Link to="/about">About</Link>
          </motion.div>
          <motion.div
            className="navbar-link"
            whileHover={{ y: -3, color: '#4361ee' }}
            whileTap={{ scale: 0.95 }}
          >
            <Link to="/services">Services</Link>
          </motion.div>
          <motion.div
            className="navbar-link"
            whileHover={{ y: -3, color: '#4361ee' }}
            whileTap={{ scale: 0.95 }}
          >
            <Link to="/blog">Blog</Link>
          </motion.div>
        </div>
        <div className="navbar-auth">
          <motion.div
            className="navbar-button"
            whileHover={{ scale: 1.05, backgroundColor: '#3f37c9' }}
            whileTap={{ scale: 0.95 }}
          >
            <Link to="/login">Login</Link>
          </motion.div>
          <motion.div
            className="navbar-button primary"
            whileHover={{ scale: 1.05, backgroundColor: '#3a35b8' }}
            whileTap={{ scale: 0.95 }}
          >
            <Link to="/signup">Sign Up</Link>
          </motion.div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
