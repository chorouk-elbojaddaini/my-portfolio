import React from 'react'
import '../styles/contact.css';
import { FaPhoneAlt} from 'react-icons/fa';
import {MdOutlineMailOutline} from 'react-icons/md';
import facebook from '../assets/facebook.png';
import insta from '../assets/instagram.png';
import linkedin from '../assets/linkedin.png';
function Contact() {
    return (
        <div className='contact-container' id='contact'>
            <span className='contact-title'>Contact Me</span>
             <div className="contact-section">
                <div className="infos">
                    <div className='circle-contact'></div>
                    <div className='circle-contact2'></div>

                    <p className='getIn'>Get in touch</p>
                    <span>Send me a message if you have any project in your mind</span>
                    <div><FaPhoneAlt  className='phone-number'/> <span className='number-email'>+212650227401</span></div>
                    <div><MdOutlineMailOutline className='email'/> <span className='number-email'>choroukelbojaddaini001@gmail.com</span></div>
                    <div className='social-media'>
                        <a href='https://www.linkedin.com/in/chorouk-el-bojaddaini-b05031227/'><img src={linkedin} alt="" className='media-img'/></a>
                        <a href='https://web.facebook.com/chorouk.elbojaddaini'><img src={facebook} alt="" className='media-img'/></a>
                        <a href='https://www.instagram.com/choroukelb/'><img src={insta} alt="" className='media-img'/></a>
                    </div>
                </div>
                 <div className='form'>
                 <form action="">
                        <input type="text" placeholder='your name'/>
                        <input type="text" placeholder='your name'/>
                        <input type="text" placeholder='your name'/>
                        <textarea placeholder='message'/>
                        <button className='send-msg'>Send</button>
                    </form>
                 </div>
             </div>
        </div>
    )
}

export default Contact
