import React from 'react'
import { Link } from 'react-router-dom'
import { FaRegEye } from "react-icons/fa";
import JobImg from '../assets/images/JOBME.png'
import '../styles/SignUp.css';
import Facebook from '../assets/images/devicon_facebook.png'
import Google from '../assets/images/devicon_google.png'
import Linkedin from '../assets/images/devicon_linkedin.png'


const SignUpPage = () => {
  return (
    <div className='sign-up container-fluid d-flex justify-content-center align-items-center'> 
        <form className=' form-2 bg-white rounded-4 shadow-lg py-3 px-5 '>
             <Link to='/' className='nav-link'><img src={JobImg} alt="job" className='sign-img mt-3' /></Link>
            <h2 className='text-center text-black sign '>Sign Up!</h2>
            <p className='text-center text-black parax'>Register to hit your dream job!</p> 
            <input type="text" placeholder='First Name' id='email' className='form-control  rounded-4 input' />
            <input type="text" placeholder='Last Name' id='email' className='form-control my-2  rounded-4 input' />
            <input type="text" placeholder='Email Address' id='email' className='form-control rounded-4 input' />
            <input type="text" placeholder='Password' id='password' className='form-control my-2  rounded-4 input' />
            <input type="text" placeholder='Confirm Password' id='email' className='form-control mb-2 rounded-4 input' />   
            <input type="checkbox" id='agree' className='form-check-input' />
            <label htmlFor="agree" className='form-check-label mx-2'>Remember Me</label>
            <button className='eyes-btn'><FaRegEye className='eyes bg-white' /></button> 
            <button className='eyes-btn2'><FaRegEye className='eyes2 bg-white' /></button>
            <button type='submit' className='btn w-100  rounded-3 my-2 d-block mx-auto log-btn'>Sign Up</button>
            <p className='fs-6 text-center text-black'>Or continue with </p>
            <div className='icons d-flex justify-content-center align-iems-center gap-2'>
           <img src={Facebook} alt="facebook" className='facebook' /> <img src={Google} alt="google" className='google' /> <img src={Linkedin} alt="linkedin" className='linkedin' />
            </div> 
            <p className='fs-6 pt-2 text-center text-black'>Already have an account? <Link to='/login' className='text-decoration-none'>Log in</Link> </p>
        </form>    
    </div>
  )
}

export default SignUpPage 