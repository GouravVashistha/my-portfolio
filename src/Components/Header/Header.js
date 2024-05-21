import React from 'react'
import './Header.css'

const Header = () => {
    return (
        <>
            <nav className="nav-wrapper">
                <div className="nav-content">
                    <img className="logo" src="./assets/image/logo192.png" alt="logo" />
                    <ul>
                        <li classNmae="menu-item">Home</li>

                        <li classNmae="menu-item">About</li>

                        <li classNmae="menu-item">Skills</li>

                        <li classNmae="menu-item">Work-Experience</li>

                        <li classNmae="menu-item">Contect Me</li>
                        <button className="contact-btn" onClick={() => { }}>Hire Me</button>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Header