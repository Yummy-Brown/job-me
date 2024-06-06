import React from 'react'
import '../styles/Contact.css'
import Header from '../components/Header'
import Frame1 from '../assets/images/Frame 116.png'
import Frame2 from '../assets/images/Frame 117.png'
import Frame3 from '../assets/images/Frame 118.png'
import JobImg from '../assets/images/JOBME.png'
import Facebookimg from '../assets/images/logos_facebook.png'
import Linkedinimg from '../assets/images/devicon_linkedin1.png'
import instagramimg from '../assets/images/skill-icons_instagram.png'
import Ximg from '../assets/images/line-md_twitter-x-alt.png'
import { Link } from 'react-router-dom' 

const ContactPage = () => {
  return (
    <div>
      <Header />
      <div className='contact-div container-fluid text-center text-white'>
      <h2>Get In Touch With Us</h2>
      <p>We want to hear from you</p>
      </div>
      <div className='px-4'>
        <form className='contact-form p-4 pb-4 mx-auto rounded-4'>
          <div className='input-div'>
          <div>
          <input type="text" placeholder='Name*' className='form-control my-3 rounded-4 contact-input' />
          <input type="text" placeholder='Email*' className='form-control rounded-4 contact-input' />
          </div>
          <div>
          <input type="text" placeholder='Phone number*' className='form-control my-3 rounded-4 contact-input' />
          <input type="text" placeholder='Subject*' className='form-control rounded-4 contact-input' />
          </div>
          </div>
          <textarea name="" id="message" placeholder='Message*' className='form-control my-3 rounded-4' rows={4}></textarea>
          <button className='w-100 rounded-4 mb-4 text-white'>Send Message</button>
        </form>
        <div className='frame-div'>
          <img src={Frame1} alt="frame1" className='frame-1' />
          <img src={Frame2} alt="frame2" className='frame-2' />
          <img src={Frame3} alt="frame3" className='frame-3' />
        </div>
        <footer className='contact-footer mt-5'>
          <hr />
          <div className='footer-div'>
          <div className='footer-div1'>
            <img src={JobImg} alt="job" className='footer-img' />
            <div className='icons-div'>
            <img src={Facebookimg} alt="Fb" />
            <img src={Linkedinimg} alt="Linked1" />
            <img src={instagramimg} alt="Insta" />
            <img src={Ximg} alt="X" />
            </div>
          </div>
          <div className='footer-div2 my-3'>
            <ul>
            <li><Link to='/jobApplication' className='text-black text-decoration-none'>Find Jobs</Link></li>
            <li><Link to='/contact' className='text-black text-decoration-none mt-4'>Contact Us</Link></li>
            <li><Link to='/signUp' className='text-black text-decoration-none'>Sign Up</Link></li>
            <li><Link to='/login' className='text-black text-decoration-none'>Log In</Link></li>
            </ul>
          </div>
          </div>
          <hr />
        </footer>
      </div>
    </div>
  )
}

export default ContactPage