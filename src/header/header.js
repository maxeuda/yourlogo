import React from 'react';
import './header.css';
import logo from '../assets/logo.svg';

class Header extends React.Component {
    render() {
      return (
        <div className="Header">
          <div className="blueBar">
            <p>
                MO - DO: 08:00 - 12:00 und 13:00 - 17:00, FR: 08:00 - 13:00 Uhr
            </p>
            <p>
                Sie erreichen uns unter: +43 (0)4584 / 24567
            </p>
          </div>
          <div className="whiteBar">
            <img src={logo} alt="YourLogo" />
            <div className="links">
              <a href="#">Leistungen</a>
              <a href="#">Bücher</a>
              <a href="#">Über uns</a>
              <a href="#">Referenzen</a>
              <a href="#">Kontakt</a>
            </div>
          </div>
        </div>
      );
    };
    
  }
  
  export default Header;