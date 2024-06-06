import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import logo from "../assets/images/JOBME.png";
import '../styles/Header.css'

const Header = () => {
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
              <Link to="/" className="text-decoration-none text-black nav-link linkss">
                Home
              </Link>
              <Link
                to="/JobApplication"
                className="text-decoration-none text-black nav-link job"
              >
                Job Listings
              </Link>
              <Link to="/contact" className="text-decoration-none text-black nav-link contact">
                Contact Us
              </Link>
            </Nav>

            <Nav className="ms-auto  gap-4">
              <Link
                to="/login"
                className="text-decoration-none text-white fs-5 btn btn-info login"
              >
                Log In
              </Link>
              <Link to="/signUp" className="text-decoration-none fs-5 btn signup">
                Sign Up
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

     
    </div>
  );
};

export default Header;