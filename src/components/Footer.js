import React from "react";
import "./Footer.css";
import Flag from "../images/512px-Flag_of_India.jpg"

const Footer = () => {
  return (
    <footer className="paypal-footer">
      <div className="footer-row top-row">
        <a href="/help">Help</a>
        <a href="/contact">Contact</a>
        <a href="/privacy">Privacy Center</a>
        <a href="/services">Services</a>
        <img src={Flag} alt="Indian Flag" className="flag" />
      </div>

      <hr className="footer-divider" />

      <div className="footer-row bottom-row">
        <div className="footer-links">
        <a href="/newsroom">Newsroom</a>
        <a href="/investor-relations">Investor Relations</a>
        <a href="/government-relations">Government Relations</a>
        </div>
        <div className="footer-right">
          <span>© 2025 P2P-Pay</span>
          <a href="/accessibility">Accessibility</a>
          <a href="/privacy-statement">Privacy Statement</a>
          <a href="/cookies">Cookies</a>
          <a href="/legal">Legal</a>
        </div>
      </div>

      <div className="footer-address">
        P2P-Pay is based at Newton School of Technology, Rishihood University
      </div>
    </footer>
  );
};

export default Footer;
