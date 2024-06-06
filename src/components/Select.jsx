import React from 'react'

const Select = () => {
  return (
    <div>
       <form className=' home-form'>
        <div className='input-div'>
        <select className='mx-2 my-2 py-2 rounded-2' name="" id="">
          <option value="">Select Job Type</option>
        </select>
        <select className='py-2 rounded-2' name="" id="">
          <option value="">Select Industry Type</option>
        </select>
        <select className='mx-2 my-2 py-2 rounded-2' name="" id="">
          <option value="">Select Mode Of Work</option>
        </select>
        <select className='py-2 rounded-2' name="" id="">
          <option value="">Select Location</option>
        </select>
        <button className='jobs-btn rounded-2'>Find Jobs</button>
        </div>
      </form> 
      <button className='jobs-btn2 rounded-2'>Find Jobs</button>
    </div>
  )
}

export default Select