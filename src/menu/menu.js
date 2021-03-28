import React from 'react';
import './menu.css';

import LaserMachine from '../assets/laser-machine.svg';
import Cut from '../assets/cut.svg';
import Transport from '../assets/transport-2.svg'
import Stamp from '../assets/stamp.svg'
import Cup from '../assets/cup.svg'

class Menu extends React.Component {
    render() {
      return (
        <div className="main_menu">
        <div className="menu_container">
            <img src={LaserMachine} alt="img" />
            <p>Lasertechnik</p>
        </div>
        <div className="menu_container">
            <img src={Cut} alt="img" />
            <p>Gravurtechnik</p>
        </div>
        <div className="menu_container">
            <img src={LaserMachine} alt="img" />
            <p>Tampondruck</p>
        </div>
        <div className="menu_container">
            <img src={Transport} alt="img" />
            <p>Werbetechnik</p>
        </div>
        <div className="menu_container">
            <img src={Stamp} alt="img" />
            <p>Stempel</p>
        </div>
        <div className="menu_container">
            <img src={Cup} alt="img" />
            <p>Pokale</p>
        </div>
        </div>
      );
    };
    
  }
  
  export default Menu;