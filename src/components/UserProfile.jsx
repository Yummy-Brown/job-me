import React from "react";
import {
  MdOutlinePerson,
  MdOutlineSettings,
  MdHelpOutline,
} from "react-icons/md";
import Ellipse from "../assets/images/Ellipse 4.png";
import { Link } from "react-router-dom";

const UserProfile = () => {
  return (
    <div
      className="bg-white rounded-3 p-3 shadow-lg text-black profile"
      style={{ width: "240px" }}
    >
      <h1 className="fs-5 my-2 text-black info">Account Information</h1>
      <div className="link-div">
      <Link to="/appliedjobs">
        <p className="">
          <MdOutlinePerson size={24} />
          <span className="ms-2">My Profile</span>
        </p>
      </Link>
      <Link to="/contact">
        <p className="">
          <MdOutlineSettings size={24} />
          <span className="ms-2">Settings</span>
        </p>
      </Link>

      <Link to="/contact">
        <p className="">
          <MdHelpOutline size={24} />
          <span className="ms-2">Help Center</span>
        </p>
      </Link>
      <div className="d-flex gap-2 align-items-center border border-dark border-start-0 border-end-0 py-1 mt-2">
        <div>
          <img
            src={Ellipse}
            style={{ width: "41px", height: "41px" }}
            alt=""
            className="rounded-circle"
          />
        </div>
        <div className="yummy">
          <h6 className="mt-2 mb-1">Jane Doe</h6>
          <small style={{ fontSize: "12px" }} className="fw-bold">Janedoe8@outlook.com</small>
        </div>
        </div>
      </div>
    </div>

  )
}

export default UserProfile