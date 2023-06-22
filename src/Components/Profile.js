import React from "react";
import { MDBTable, MDBTableHead, MDBTableBody } from "mdb-react-ui-kit";
import { Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { FaRegUserCircle, FaEyeSlash } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";
import { ImProfile } from "react-icons/im";
import Sidebar from "../Components/Sidebar.js";

function Profile() {
  return (
    <>
      <Sidebar>
        <div className="NavButton">
          <FaRegUserCircle color="#ffffff" fontSize="2.1em" />
          &nbsp;&nbsp;
          <Navbar.Brand href="/" className="text-white">
            Compliance-Software
          </Navbar.Brand>
          <div className="end">
            <FaRegUserCircle color="#ffffff" fontSize="1.8em" />
            <h5
              className="d-inline"
              style={{ fontSize: "15px", color: "#ffffff" }}
            >
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
        <MDBTable>
          <MDBTableHead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">ID</th>
              <th scope="col">Name</th>
              <th scope="col">Branch</th>
              <th scope="col">Address</th>
              <th scope="col">Actions</th>
            </tr>
          </MDBTableHead>
          <MDBTableBody>
            <tr>
              <th scope="row">1</th>
              <td>00000</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>demo</td>
              <td>
                <NavLink to="/eedetails">
                  <FiEdit color="green" fontSize="1.5em" />
                </NavLink>
                &nbsp;{"   "}
                <NavLink to="/hdetails">
                  <FaEyeSlash color="Red" fontSize="1.5em" />
                </NavLink>
              </td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>00000</td>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
              <td>
                <NavLink to="/eedetails">
                  <FiEdit color="green" fontSize="1.5em" />
                </NavLink>
                &nbsp; {"   "}
                <NavLink to="/hdetails">
                  <FaEyeSlash color="Red" fontSize="1.5em" />
                </NavLink>
              </td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>00000</td>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
              <td>
                <NavLink to="/ehdetails">
                  <FiEdit color="green" fontSize="1.5em" />
                </NavLink>
                &nbsp;{"   "}
                <NavLink to="/hdetails">
                  <FaEyeSlash color="Red" fontSize="1.5em" />
                </NavLink>
              </td>
            </tr>
          </MDBTableBody>
        </MDBTable>
      </Sidebar>
    </>
  );
}

export default Profile;
