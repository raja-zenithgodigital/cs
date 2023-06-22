import React, { useState } from "react";
import { Navbar } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaRegUserCircle, FaHouseUser } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.css";
import Sidebar from "../Components/Sidebar.js";
import Completecourse from "../Components/Completecourse.js";

function HotelComleteCourse() {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <Sidebar>
      <div className="NavButton">
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
        <FaHouseUser color="#A09E9D" fontSize="2.1em" />
        <h5 className="d-inline " style={{ fontSize: "20px" }}>
          Hotel Complete Course
        </h5>
        <div className="float-end">
          <button className="button-8">Import Exel</button>&nbsp;
        </div>
        <div className="float-end mr-5">
          <input
            className="form-control mt-4"
            type="text"
            placeholder="Search"
            aria-label="Search"
          />
          &nbsp;
        </div>
        <div className="float-end mr-5">
          <DatePicker
            showIcon
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            isClearable
            placeholderText="I have been cleared!"
            className="DatePicker "
          />
          &nbsp;
        </div>
      </div>
      <div>
        <Completecourse />
      </div>
    </Sidebar>
  );
}
export default HotelComleteCourse;
