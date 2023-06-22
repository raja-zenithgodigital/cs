import React from "react";
import { Container, Navbar } from "react-bootstrap";
import { FaRegUserCircle, FaRegAddressBook } from "react-icons/fa";
import Sidebar from "../Components/Sidebar.js";

function Users() {
  return (
    <div>
      <Sidebar>
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
          <FaRegAddressBook color="#A09E9D" fontSize="2.1em" />
          <h5 className="d-inline " style={{ fontSize: "20px" }}>
            Exam
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
      </Sidebar>
    </div>
  );
}

export default Users;
