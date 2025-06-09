import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes, FaHome, FaInfoCircle, FaCreditCard, FaBlog, FaUser, FaSignInAlt } from 'react-icons/fa';
import '../styles/Navbar.css';
import logo from '/Users/puneettakhar/Downloads/P2P Payment/P2P-Pay/src/images/brave_screenshot_www.logoai.com (1).png';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <img src={logo} alt="P2P Pay Logo" className="logo-img" />
        </Link>

        <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>

        <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <Link to="/" className="nav-link" onClick={() => setIsOpen(false)}>
              <FaHome className="nav-icon" />
              <span>Home</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link" onClick={() => setIsOpen(false)}>
              <FaInfoCircle className="nav-icon" />
              <span>About</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/services" className="nav-link" onClick={() => setIsOpen(false)}>
              <FaCreditCard className="nav-icon" />
              <span>Services</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/blog" className="nav-link" onClick={() => setIsOpen(false)}>
              <FaBlog className="nav-icon" />
              <span>Blog</span>
            </Link>
          </li>
        </ul>

        <div className="auth-buttons">
          <Link to="/login" className="auth-button login">
            <FaSignInAlt />
            <span>Login</span>
          </Link>
          <Link to="/signup" className="auth-button signup">
            <FaUser />
            <span>SignUp</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
