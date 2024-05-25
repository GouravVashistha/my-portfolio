import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <>
            <nav className="nav-wrapper">
                <div className="nav-content">
                    <img className="logo" src="./assets/image/name.svg" alt="logo" />
                    
                    <ul>
                        <li className="menu-item">Home</li>
                        <li className="menu-item">About</li>
                        <li className="menu-item">Skills</li>
                        <li className="menu-item">Work-Experience</li>
                        <li className="menu-item">Contact Me</li>
                    </ul>
                    <button className="contact-btn" onClick={() => { }}>Hire Me</button>
                </div>
            </nav>
        </>

    );
}

export default Header;
