import React from 'react';
import '../styles/about.css';
import avatar from '../assets/avatar.png';
function About() {
    
    return (
        <div className='about-section' id='about'>
            <div className='circle3'></div>
            <div className='circle4'></div>
            <div className='circle5'></div>
            <span className='about-title'> About Me</span>
            <div className='about-text-img'>
                 <img src= {avatar} alt="avatarImg" className='avatar'/>
                 <div className='textAbout'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab quae ipsa nobis non sit, omnis minima eligendi asperiores laborum repellendus blanditiis accusantium laudantium harum perspiciatis. Sapiente commodi alias officia quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta quae, praesentium magni ea atque reprehenderit consequatur saepe debitis! Rem perspiciatis dolorum aperiam dolore atque reiciendis temporibus, in consectetur cum illum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint aperiam blanditiis, pariatur quidem cumque et dolorem libero! Modi a blanditiis commodi explicabo ex molestiae aspernatur nisi qui, illo dignissimos ipsam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, quas explicabo debitis iure reprehenderit molestiae consequatur numquam consequuntur nam nulla itaque asperiores error hicjjje.</div>
            </div>
        </div>
    )
}

export default About
