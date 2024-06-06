import React, {useState} from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import logo from "../assets/images/JOBME.png";
import '../styles/Header.css'
import { IoMdPerson } from "react-icons/io";
import { RxExit } from "react-icons/rx";
import UserProfile from "./UserProfile";

  const JobNav = () => {
    const [showProfile, setShowProfile] = useState(false)
    const toggleShowprofile = ()=>{
      setShowProfile(!showProfile)
    }
  return (
    <div className="nav-div">
      <Navbar expand="lg" className="bg-body-tertiary fs-5 py-3 nav-linkx">
        <Container>
          <Navbar.Brand>
            <Link to="/">
              <img src={logo} alt="Job Me Logo" />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto  gap-3 ">
              <Link to="/jobListings " className="text-decoration-none text-black nav-link linkss">
              Job Listings
              </Link>
              <Link
                to="/JobApplication"
                className="text-decoration-none text-black nav-link job"
              >
                Applied Jobs
              </Link>
              <Link to="/contact" className="text-decoration-none text-black nav-link contact">
                Contact Us
              </Link>
            </Nav>

            <Nav className="ms-auto  gap-4 position-relative">
              <div
                className="text-decoration-none text-white fs-5 btn rounded-5 px-4 job-log"
              >
                <div className="">
                  <button onClick={toggleShowprofile} className="icon-border me-3">
                  <IoMdPerson className="text-black"  />
                  </button >
                  <Link to='/login'><RxExit className="text-danger" /></Link>
                </div>
                {showProfile &&<div style={{ top: "60px", left: "-10px" }}
                  className="position-absolute "><UserProfile /></div> }
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default JobNav;