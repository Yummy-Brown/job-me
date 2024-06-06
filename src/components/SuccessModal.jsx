import React from 'react'
import { Modal } from 'react-bootstrap'
import Vector from '../assets/images/Vector.png'
import { Link } from 'react-router-dom'

const SuccessModal = ({show, setShow}) => {
  return (
    <div className='text-center'>
        <Modal show={show} onHide={()=>setShow(false)} centered size='md'>
            <Modal.Body>
                <h1 className='app-success'>Application Successful</h1>
                <img src={Vector} alt="vector" className='vector d-block mx-auto' />
                <Link to='/jobApplication' className='text-decoration-none text-black'> <p className='proceed text-decoration-none'>Proceed back to job listings> </p> </Link>
            </Modal.Body>

        </Modal>
    </div>
  )
}

export default SuccessModal