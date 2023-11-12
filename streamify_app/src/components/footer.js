import React from 'react';
import logo from '../assets/logo.png';
import './footer.css'

function Footer() {
  return (
    <footer id="myFooter">
      <div className="logo_img">
        <img src={logo} alt="Logo" />
      </div>
      <div className="container1">
        <p className="footer-copyright">© 2023 Copyright - Rafael Pinheiro</p>
      </div>
    </footer>
  );
}

export default Footer;
