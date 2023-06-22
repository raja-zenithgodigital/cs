import React from "react";
import { Card, Form, Container, Navbar } from "react-bootstrap";
import { FaRegUserCircle, FaExchangeAlt } from "react-icons/fa";
import HotelSidebar from "../Components/HotelSidebar.js";

function HotelChangePassword() {
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
          <FaExchangeAlt color="#A09E9D" fontSize="2.1em" />
          <h5 className="d-inline " style={{ fontSize: "20px" }}>
            Change Password
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
        <div className="container-fluid">
          <div className="row ">
            <Container>
              <Card>
                <Card.Body>
                  <Card.Title className="text-center">
                    Change Password
                  </Card.Title>
                  <div className="mb-3">
                    <label className="md mb-1 text-left">Old Password</label>
                    <input
                      className="form-control"
                      id=""
                      type="text"
                      placeholder=" Old Password"
                    />
                  </div>
                  <div className="mb-3">
                    <label className="md mb-1 text-left">New Password</label>
                    <input
                      className="form-control"
                      id=""
                      type="password"
                      placeholder=" New Password"
                    />
                  </div>
                  <div className="mb-3">
                    <label className="md mb-1">Re-Password</label>
                    <input
                      className="form-control"
                      id=""
                      type="text"
                      placeholder="Re-Password"
                    />
                  </div>
                  <button
                    className="btn"
                    type="button"
                    style={{ backgroundColor: "#EE2B33", color: "white" }}
                  >
                    Change Password
                  </button>
                  <Form.Label></Form.Label>
                </Card.Body>
              </Card>
            </Container>
          </div>
        </div>
      </HotelSidebar>
    </>
  );
}

export default HotelChangePassword;
