import React from 'react'
import JobNav from '../components/JobNav'
import '../styles/Job.css'
import JobImg from '../assets/images/JOBME.png'
import Facebookimg from '../assets/images/logos_facebook.png'
import Linkedinimg from '../assets/images/devicon_linkedin1.png'
import instagramimg from '../assets/images/skill-icons_instagram.png'
import Ximg from '../assets/images/line-md_twitter-x-alt.png'
import { Link } from 'react-router-dom' 
import { useState } from 'react';
import SuccessModal from '../components/SuccessModal';


const JobApplicationPage = () => {
  const [show, setShow] = useState(false);
  const handleFormSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <div>
      <SuccessModal show= {show} setShow={setShow} />
    <div className='job-div'>
      <JobNav />
      <div className='px-4 job-div'>
        <form onSubmit={handleFormSubmit} className='job-form p-4 rounded-4'>
          <div className='input-div'>
          <div className='pt-4'>
          <label htmlFor="name">Name*</label>
          <input type="text"  className='form-control my-2 rounded-4 contact-input' />
          <label htmlFor="name">Email*</label>
          <input type="text"  className='form-control my-2 rounded-4 contact-input' />
          </div>
          <div className='input2'>
          <label htmlFor="name">Phone number*</label>
          <input type="text"  className='form-control my-2 rounded-4 contact-input' />
          <label htmlFor="name">Subject*</label>
          <input type="text"  className='form-control my-2 rounded-4 contact-input' />
          </div>
          </div>
          <label htmlFor="name" className='cover'>Cover*</label>
          <textarea name="" id="message"  className='form-control my-2 rounded-4' rows={4}></textarea>
          <label htmlForfor="formFileMultiple" className="form-label">Upload CV/Resume*</label>
          <input className="form-control rounded-4 mb-2 file-form" type="file" id="formFileMultiple" multiple></input>
          <p className='check-para mt-2'>File should not not be laeger than 12MB. Supported file type: doc. docx. pdf</p>
          <input type="checkbox" id='agree' className='form-check-input' />
          <label htmlFor="agree" className='form-check-label mx-2 agree'>I agreee to the terms and conditions</label>
          <button onClick={()=> setShow(true)} className='btn rounded-4 mt-3  text-white'>Apply Now</button>
        </form>
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
    </div>
  )
}

export default JobApplicationPage