import React from 'react';
import './main.css';
import arrow from '../assets/arrows.svg'

class Main extends React.Component {
    render() {
        return (
            <div className="Main">
                <div className="main_slider">
                    <img id="leftArrow" src={arrow} alt="arrow" />
                    <p>Modernste Technologien für innovative Lösungen aus Österreich</p>
                    <img id="rightArrow" src={arrow} alt="arrow" />
                </div>
            </div>
        );
    };
}

export default Main;