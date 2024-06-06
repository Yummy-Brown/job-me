 import React from 'react'
 import 'animate.css'
 import { ThreeDots } from 'react-loader-spinner'
 import JobImg from '../assets/images/JOBME.png'


 const Fallback = () => {
    return (
        <div className=' mx-auto d-flex justify-content-center align-items-center animate_animated animate_zoomIn vh-100'>
            <div className='d-flex gap-3 my-auto d-flex justify-content-center align-item-center'>
              <img src={JobImg} alt="job" className='footer-img' />
              <ThreeDots
            visible={true}
            height="80"
            width="80"
            color="#0DCAF0"
            radius="9"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClass=""
            />              
            </div>
        </div>
    )
 }

 
 export default Fallback