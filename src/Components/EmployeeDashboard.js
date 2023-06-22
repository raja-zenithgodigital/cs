import React from "react";
import { Navbar } from "react-bootstrap";
import { FaRegUserCircle, FaRegEdit } from "react-icons/fa";
import EmployeeSidebar from "../Components/EmployeeSidebar.js";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRipple,
} from "mdb-react-ui-kit";

function EmployeeDashboard() {
  return (
    <div>
      <EmployeeSidebar>
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
          <FaRegEdit color="#A09E9D" fontSize="2.1em" />
          <h5 className="d-inline" style={{ fontSize: "20px" }}>
            Dashboard
          </h5>
        </div>
        <MDBContainer fluid className="my-5">
          <MDBRow>
            <MDBCol md="6" lg="4" xl="3">
              <MDBCard style={{ borderRadius: "15px" }}>
                <MDBRipple
                  rippleColor="light"
                  rippleTag="div"
                  className="bg-image rounded hover-overlay"
                >
                  <MDBCardImage
                    src="./img/1.jpg"
                    fluid
                    className="w-100"
                    style={{
                      borderTopLeftRadius: "15px",
                      borderTopRightRadius: "15px",
                    }}
                  />
                  <a href="#!">
                    <div className="mask"></div>
                  </a>
                </MDBRipple>
                <MDBCardBody className="pb-0">
                  <div className="d-flex justify-content-between">
                    <div>
                      <p>
                        <a href="#!" className="text-dark">
                          Computer Course
                        </a>
                      </p>
                      <p className="small text-muted">John Smith </p>
                    </div>
                    <div>
                      <button
                        className="btn"
                        type="button"
                        style={{ backgroundColor: "#EE2B33", color: "white" }}
                      >
                        {" "}
                        Explore Now{" "}
                      </button>
                    </div>
                  </div>
                </MDBCardBody>
                <hr className="my-0" />
              </MDBCard>
            </MDBCol>
            <MDBCol md="8" lg="6" xl="3">
              <MDBCard style={{ borderRadius: "15px" }}>
                <MDBRipple
                  rippleColor="light"
                  rippleTag="div"
                  className="bg-image rounded hover-overlay"
                >
                  <MDBCardImage
                    src="./img/1.jpg"
                    fluid
                    className="w-100"
                    style={{
                      borderTopLeftRadius: "15px",
                      borderTopRightRadius: "15px",
                    }}
                  />
                  <a href="#!">
                    <div className="mask"></div>
                  </a>
                </MDBRipple>
                <MDBCardBody className="pb-0">
                  <div className="d-flex justify-content-between">
                    <div>
                      <p>
                        <a href="#!" className="text-dark">
                          Computer Course
                        </a>
                      </p>
                      <p className="small text-muted">John Smith </p>
                    </div>
                    <div>
                      <button
                        className="btn"
                        type="button"
                        style={{ backgroundColor: "#EE2B33", color: "white" }}
                      >
                        {" "}
                        Explore Now{" "}
                      </button>
                    </div>
                  </div>
                </MDBCardBody>
                <hr className="my-0" />
              </MDBCard>
            </MDBCol>
            <MDBCol md="8" lg="6" xl="3">
              <MDBCard style={{ borderRadius: "15px" }}>
                <MDBRipple
                  rippleColor="light"
                  rippleTag="div"
                  className="bg-image rounded hover-overlay"
                >
                  <MDBCardImage
                    src="./img/1.jpg"
                    fluid
                    className="w-100"
                    style={{
                      borderTopLeftRadius: "15px",
                      borderTopRightRadius: "15px",
                    }}
                  />
                  <a href="#!">
                    <div className="mask"></div>
                  </a>
                </MDBRipple>
                <MDBCardBody className="pb-0">
                  <div className="d-flex justify-content-between">
                    <div>
                      <p>
                        <a href="#!" className="text-dark">
                          Computer Course
                        </a>
                      </p>
                      <p className="small text-muted">John Smith </p>
                    </div>
                    <div>
                      <button
                        className="btn"
                        type="button"
                        style={{ backgroundColor: "#EE2B33", color: "white" }}
                      >
                        {" "}
                        Explore Now{" "}
                      </button>
                    </div>
                  </div>
                </MDBCardBody>
                <hr className="my-0" />
              </MDBCard>
            </MDBCol>
            <MDBCol md="8" lg="6" xl="3">
              <MDBCard style={{ borderRadius: "15px" }}>
                <MDBRipple
                  rippleColor="light"
                  rippleTag="div"
                  className="bg-image rounded hover-overlay"
                >
                  <MDBCardImage
                    src="./img/1.jpg"
                    fluid
                    className="w-100"
                    style={{
                      borderTopLeftRadius: "15px",
                      borderTopRightRadius: "15px",
                    }}
                  />
                  <a href="#!">
                    <div className="mask"></div>
                  </a>
                </MDBRipple>
                <MDBCardBody className="pb-0">
                  <div className="d-flex justify-content-between">
                    <div>
                      <p>
                        <a href="#!" className="text-dark">
                          Computer Course
                        </a>
                      </p>
                      <p className="small text-muted">John Smith </p>
                    </div>
                    <div>
                      <button
                        className="btn"
                        type="button"
                        style={{ backgroundColor: "#EE2B33", color: "white" }}
                      >
                        {" "}
                        Explore Now{" "}
                      </button>
                    </div>
                  </div>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </EmployeeSidebar>
    </div>
  );
}

export default EmployeeDashboard;
