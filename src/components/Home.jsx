import React from 'react'
import Header from './Header'
import Select  from './Select'

const Home = () => {
  return (
    <>
    <Header />
    <div className='home container-fluid px-0'>
      <h1 className='find text-white text-center'>
        FIND JOBS AND HIRE AMAZING <br /> TALENTS!
      </h1>
      <div className='select-form'>
      <Select />
      </div>
    </div>
    </>
  )
}

export default Home