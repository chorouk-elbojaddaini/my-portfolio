import React from 'react';
import {useState} from 'react';
import {Link} from 'react-scroll';
import {FaBars} from 'react-icons/fa';
import logo from '../assets/logo.png';
function Navbar() {
    const [nav,setNav] = useState(false);
    const links = [
        {
            id : 1,
            link: "home"
        },
        {
            id:2,
            link:"about"
        },
        {
            id:3,
            link:"skills"
        },
        {
            id:4,
            link:"work"
        },
        {
            id:5,
            link:"contact"
        }
    ]
    return (
        <header >
            <div className='logo'>
                <div className='circle'></div>
            <img src={logo} alt="logoimage" className='logoimg'/>
            </div>
            <div style={{color:"#fff"}}>
                <ul className='nav-list'>
                    <li className='hover'><Link  to="home" spy={true} smooth={true} offset={-100} duration={500}>HOME</Link></li>
                    <li className='hover'><Link  to="about" spy={true} smooth={true} offset={-100} duration={300}>ABOUT</Link></li>
                    <li className='hover'><Link  to="skills" spy={true} smooth={true} offset={-100} duration={500}>SKILSS</Link></li>
                    <li className='hover'><Link  to="work" spy={true} smooth={true} offset={-100} duration={500}>WORK</Link></li>
                    <li className='contact'><Link  to="contact" spy={true} smooth={true} offset={50} duration={500}>CONTACT ME</Link></li>

                </ul>
                
            </div>
            <div className='humburger'>
                <FaBars/>
            </div>
        </header>
    )
}

export default Navbar;
