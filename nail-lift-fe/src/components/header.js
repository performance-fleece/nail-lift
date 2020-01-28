import React from 'react';
import logo from '../images/NailLift-LogoForWeb.png';

function Header() {
    return (
        <div className="header-box">
            <div className="nail-logo">
                <img src={logo} alt="nail-logo" />
            </div>
            <div className="contact">
                <p>Contact: Brooke Maltun (Sales)</p>
                <p>310-940-1515</p>
                <p>NailLiftUSA@gmail.com</p>
            </div>
        </div>
    );
}

export default Header;
