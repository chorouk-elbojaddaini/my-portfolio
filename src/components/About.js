import React from 'react';
import '../styles/about.css';
import avatar from '../assets/avatar.png';
function About() {
    
    return (
        <div className='about-section' id='about'>
            <div className='circle3'></div>
            <div className='circle4'></div>
            <div className='circle5'></div>
            <div className='circ1'></div>
            <div className='circ2'></div>

            <span className='about-title'> About Me</span>
            <div className='about-text-img'>
                 <img src= {avatar} alt="avatarImg" className='avatar'/>
                 <div className='textAbout'>I’m a fourth year software engineering student at Applied sciences school at Oujda , I’m passionate about web development especially frontend , I enjoy creating websites , I had creating some of them you can take a look by scrolling down , I already try to develop my skills to achieve the top level , School gives me a huge knowledge but knowledge without practicing is nothing , so I try to practice all the time . I spend my free time reading , I am a normal girl who enjoys spending time with friends, while not working or studying, which takes most of my time of course.</div>
            </div>
        </div>
    )
}

export default About
