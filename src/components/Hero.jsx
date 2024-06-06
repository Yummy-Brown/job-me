import React from 'react'
import '../styles/Hero.css'
import { Link } from 'react-router-dom'
import JobImg from '../assets/images/JOBME.png'
import { FaRegEye } from "react-icons/fa";
import Facebook from '../assets/images/devicon_facebook.png'
import Google from '../assets/images/devicon_google.png'
import Linkedin from '../assets/images/devicon_linkedin.png'

const Hero = () => {
  return (
    <div className='hero container-fluid d-flex justify-content-center align-items-center'> 
        <form className=' form bg-white rounded-4 p-5'>
             <Link to='/' className='nav-link'><img src={JobImg} alt="job" className='job-img' /></Link>
            <h2 className='fs-2 text-center text-black welcome'>Welcome back!</h2>
            <p className=' fs-4 text-center text-black para'>Log in to hit your dream job!</p> 
            <input type="text" placeholder='Email Address' id='email' className='form-control py-3 rounded-4 form-input' />
            <input type="text" placeholder='Password' id='password' className='form-control py-3 my-3 rounded-4 form-input' />   
            <input type="checkbox" id='agree' className='form-check-input' />
            <label htmlFor="agree" className='form-check-label mx-2'>Remember Me</label>
            <button className='eye-btn'><FaRegEye className='eye' /></button> 
            <button type='submit' className='btn w-100 rounded-3 mx-auto my-2 log-btn'>Log In</button>
            <p className='fs-6 text-center text-black'>Or continue with </p> 
            <div className='icons d-flex justify-content-center align-iems-center gap-2'>
            <img src={Facebook} alt="facebook" className='facebook' /> <img src={Google} alt="google" className='google' /> <img src={Linkedin} alt="linkedin" className='linkedin' />
            </div>
            <p className='fs-6 text-center text-black'>Already have an account? <Link to='/signUp' className='text-decoration-none'>Sign up</Link> </p>
        </form>    
    </div>
  )
}

export default Hero









// import React from 'react'
// import { Link } from 'react-router-dom'
// import { FaRegEye } from "react-icons/fa";
// import JobImg from '../assets/images/JOBME.png'
// import '../styles/Hero.css'

// const Hero = () => {
//   return (
//     <div className='hero container'>
//         <form className=' form bg-white mx-auto rounded-4 p-5'>
//              <Link to='/' className='nav-link'><img src={JobImg} alt="job" className='job-img my-3' /></Link>
//             <h2 className='fs-4 my-2 text-center text-black welcome'>Welcome Back!</h2>
//             <p className='fs-3 text-center text-black para'>Log In to hit your dream <br /> job</p> 
//             <input type="text" placeholder='Email Address' id='email' className='form-control my-3 py-3 rounded-4' />
//             <input type="text" placeholder='Password' id='password' className='form-control my-3 py-3 rounded-4' />
//             <input type="checkbox" id='agree' className='form-check-input' />
//             <label htmlFor="agree" className='form-check-label mx-2'>Remember Me</label>
//             <button type='submit' className='btn w-100 my-3 rounded-3 d-block mx-auto log-btn'>Log In</button>
//             <p className='fs-6 text-center text-black'>Or continue with </p> 
//             <p className='fs-6 text-center text-black'>Don't have an account? <Link to='/signUp' className='text-decoration-none'>Sign Up</Link> </p>
//             <button className='eye-btn'><FaRegEye className='eye bg-white' /></button> 
//         </form>
//     </div>
//   )
// }

// export default Hero 