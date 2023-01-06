import React from 'react';
import {FaBars} from 'react-icons/fa';
import logo from '../assets/logo.png';
function Navbar() {
    return (
        <header>
            <div className='logo'>
                <div className='circle'></div>
            <img src={logo} alt="logoimage" className='logoimg'/>
            </div>
            <div style={{color:"#fff"}}>
                <ul className='nav-list'>
                    <li>HOME</li>
                    <li>ABOUT</li>
                    <li>SKILLS</li>
                    <li>WORK</li>
                    <li className='contact'>CONTACT ME</li>
                </ul>
            </div>
            <div className='humburger'>
                <FaBars/>
            </div>
        </header>
    )
}

export default Navbar;
