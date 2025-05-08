import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-links">
        <a href="/about">About Us</a>
        <a href="/services">Services</a>
        <a href="/terms">Terms and Conditions</a>
        <a href="/privacy">Privacy Policy</a>
      </div>
      <div className="footer-contact">
        <h3>Contact Us</h3>
        <p>Email: puneettakhar4488@gmail.com</p>
        <p>Phone: +91 8306374488</p>
      </div>
      <div className="footer-social">
        <h3>Follow Us</h3>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebook />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
