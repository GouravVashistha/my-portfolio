import React, { useState } from 'react';
import './Header.css';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <>
            <nav className="nav-wrapper">
                <div className="nav-content">
                    <img className="logo-class" src="./assets/image/gourav.png" alt="logo" />
                    <div className={`menu-icon ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
                        <div className="bar"></div>
                        <div className="bar"></div>
                        <div className="bar"></div>
                    </div>
                    <div className={`menu ${menuOpen ? 'open' : ''}`}>
                        <div className="close-icon" onClick={toggleMenu}>&times;</div>
                        <ul>
                            <li className="menu-item">Home</li>
                            <li className="menu-item">About</li>
                            <li className="menu-item">Skills</li>
                            <li className="menu-item">Work-Experience</li>
                            <li className="menu-item">Contact Me</li>
                        </ul>
                    </div>
                    <button className="contact-btn" onClick={() => { }}>Hire Me</button>
                </div>
            </nav>
        </>
    );
}

export default Header;
