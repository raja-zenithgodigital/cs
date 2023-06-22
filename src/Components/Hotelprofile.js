import React from "react";
import { Navbar } from "react-bootstrap";
import { FaRegUserCircle } from "react-icons/fa";
import { ImProfile } from "react-icons/im";
import HotelSidebar from "../Components/HotelSidebar.js";
import HotelViewdetails from "../Components/HotelViewdetails.js";

const Hotelprofile = () => {
  return (
    <>
      <HotelSidebar>
        <div className="NavButton">
          <FaRegUserCircle color="#ffffff" fontSize="2.1em" />
          &nbsp;&nbsp;
          <Navbar.Brand href="/" className="text-white">
            Compliance-Software
          </Navbar.Brand>
          <div className="end mt-2">
            <FaRegUserCircle color="#ffffff" fontSize="1.5em" />
            <h5 className="d-inline text-white " style={{ fontSize: "15px" }}>
              User Name (Alex)
            </h5>
          </div>
        </div>
        <div className="list m-2">
          <ImProfile color="#A09E9D" fontSize="2.1em" />
          <h5 className="d-inline " style={{ fontSize: "20px" }}>
            Profile
          </h5>
          <div className="float-end">
            <button className="button-8">All Course</button>
            &nbsp;
            <button className="button-8">All Course</button>&nbsp;
            <button className="button-8">All Course</button>&nbsp;
            <button className="button-8">All Course</button>
            &nbsp;
          </div>
        </div>
        <HotelViewdetails />
      </HotelSidebar>
    </>
  );
};

export default Hotelprofile;
