import React from "react";
import { Navbar, Button } from "react-bootstrap";
import { MDBTable, MDBTableHead, MDBTableBody } from "mdb-react-ui-kit";
import { FaRegUserCircle } from "react-icons/fa";
import { VscRequestChanges } from "react-icons/vsc";
import Sidebar from "../Components/Sidebar.js";

function Details() {
  return (
    <Sidebar>
      <div className="NavButton">
        <Navbar.Brand href="/" className="text-white">
          Compliance-Software
        </Navbar.Brand>

        <div className="float-end mt-2">
          <FaRegUserCircle color="#ffffff" fontSize="2em" />
          <h5 className="d-inline text-white " style={{ fontSize: "15px" }}>
            User Name (Alex)
          </h5>
        </div>
      </div>
      <div className="list m-2">
        <VscRequestChanges color="#A09E9D" fontSize="2.1em" />
        <h5 className="d-inline " style={{ fontSize: "20px" }}>
          Request Details
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

      <section style={{ backgroundColor: "#eee" }}>
        <MDBTable align="middle">
          <MDBTableHead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Title</th>
              <th scope="col">Status</th>
              <th scope="col">Actions</th>
            </tr>
          </MDBTableHead>
          <MDBTableBody>
            <tr>
              <td>01</td>
              <td>
                <div className="d-flex align-items-center">
                  <img
                    src="https://mdbootstrap.com/img/new/avatars/8.jpg"
                    alt=""
                    style={{ width: "45px", height: "45px" }}
                    className="rounded-circle"
                  />
                  <div className="ms-3">
                    <p className="fw-bold mb-1">John Doe</p>
                    <p className="text-muted mb-0">john.doe@gmail.com</p>
                  </div>
                </div>
              </td>
              <td>
                <p className="fw-normal mb-1"></p>
                <p className="text-muted mb-0">IT department</p>
              </td>
              <td>
                <Button className="btn-warning" rounded size="sm">
                  Pending Request
                </Button>
              </td>
              <td>
                <Button className="btn-success" rounded size="sm">
                  Accept Request
                </Button>
              </td>
            </tr>
            <tr>
              <td>02</td>
              <td>
                <div className="d-flex align-items-center">
                  <img
                    src="https://mdbootstrap.com/img/new/avatars/6.jpg"
                    alt=""
                    style={{ width: "45px", height: "45px" }}
                    className="rounded-circle"
                  />
                  <div className="ms-3">
                    <p className="fw-bold mb-1">Alex Ray</p>
                    <p className="text-muted mb-0">alex.ray@gmail.com</p>
                  </div>
                </div>
              </td>
              <td>
                <p className="fw-normal mb-1">Consultant</p>
                <p className="text-muted mb-0">Finance</p>
              </td>
              <td>
                <Button className="btn-warning" rounded size="sm">
                  Pending Request
                </Button>
              </td>
              <td>
                <Button className="btn-success" rounded size="sm">
                  Accept Request
                </Button>
              </td>
            </tr>
            <tr>
              <td>03</td>
              <td>
                <div className="d-flex align-items-center">
                  <img
                    src="https://mdbootstrap.com/img/new/avatars/7.jpg"
                    alt=""
                    style={{ width: "45px", height: "45px" }}
                    className="rounded-circle"
                  />
                  <div className="ms-3">
                    <p className="fw-bold mb-1">Kate Hunington</p>
                    <p className="text-muted mb-0">kate.hunington@gmail.com</p>
                  </div>
                </div>
              </td>
              <td>
                <p className="fw-normal mb-1">Designer</p>
                <p className="text-muted mb-0">UI/UX</p>
              </td>
              <td>
                <Button className="btn-warning" rounded size="sm">
                  Pending Request
                </Button>
              </td>
              <td>
                <Button className="btn-success" rounded size="sm">
                  Accept Request
                </Button>
              </td>
            </tr>
          </MDBTableBody>
        </MDBTable>
      </section>
    </Sidebar>
  );
}
export default Details;
