import React from 'react';
import './FooterComponent.css';
import Logo from '../images/Web_App_Logo.png';

const FooterComponent = () => {
  return (
    <footer className="footer">
      <div className="footerContainer">
        <img src={Logo} alt="Brand Logo" className="logo"/>
      
        <div className="social-media-icons">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
        <span className="textMuted">It's not you! It's me! © 2023</span>
      </div>
    </footer>
  );
};

export default FooterComponent;
