import React from 'react';
import '../styles/home.css';

import {MdWavingHand} from 'react-icons/md';
import { FaHandPointRight } from 'react-icons/fa';
import code from '../assets/programming.png';

function Home() {
    return (
        <div className='home'>
            <div className='home-text'>
            <div className='hello-text'>Hello there!   <MdWavingHand /></div>
            <span className='me'>I'm</span>
            <h1>Chorouk EL BOJADDAINI</h1>
            <h3>software engineering student</h3>
            <p>I'm not a great coder, but I'm a passionate coder and I love what I do.</p>
            <a href='#' className='work-click'><FaHandPointRight/>  Show my work</a>
            </div>
            <div className='home-image'>
                <div className='circle2'></div>
                <img src={code} alt="codeImg" className='coding-img'/>
            </div>
        </div>
    )
}

export default Home
