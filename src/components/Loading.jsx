import React from 'react'
import { ThreeDots } from 'react-loader-spinner'

const Loading = () => {
  return (
    <div className='d-flex justify-content-center align-items-center'>
 <ThreeDots
  img src={JobImg} alt="job" className='job-img'
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
  )
}

export default Loading