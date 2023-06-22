import React from "react";
import { Container, Navbar, Card, Row, Col, Form } from "react-bootstrap";
import { FaRegUserCircle, FaRegAddressBook } from "react-icons/fa";
import ProgressBar from "react-bootstrap/ProgressBar";
import HotelSidebar from "../Components/HotelSidebar.js";

function Hotelcourse(props) {
  const now = 60;
  return (
    <div>
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
          <FaRegAddressBook color="#A09E9D" fontSize="2.1em" />
          <h5 className="d-inline " style={{ fontSize: "20px" }}>
            Course
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
          <div className="row text-center">
            <Container>
              <Row className="mt-4 mt-md-5">
                <Col xs lg="4 px-md-5">
                  <Card>
                    <Card.Img variant="top" src="./img/1.jpg" />
                    <Card.Body>
                      <Card.Title>Card Course</Card.Title>
                      <Card.Text>
                        {" "}
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </Card.Text>
                      <button
                        className="btn"
                        type="button"
                        style={{ backgroundColor: "#EE2B33", color: "white" }}
                      >
                        {" "}
                        Our Course{" "}
                      </button>
                      <Form.Label></Form.Label>
                      <ProgressBar
                        variant="success"
                        now={now}
                        label={`${now}%`}
                        visuallyHidden
                      />
                    </Card.Body>
                  </Card>
                </Col>
                <Col xs lg="4 px-md-5">
                  <Card>
                    <Card.Img variant="top" src="./img/1.jpg" />
                    <Card.Body>
                      <Card.Title>Card Course</Card.Title>
                      <Card.Text>
                        {" "}
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </Card.Text>
                      <button
                        className="btn"
                        type="button"
                        style={{ backgroundColor: "#EE2B33", color: "white" }}
                      >
                        {" "}
                        Our Course{" "}
                      </button>
                      <Form.Label></Form.Label>
                      <ProgressBar
                        variant="success"
                        now={now}
                        label={`${now}%`}
                        visuallyHidden
                      />
                    </Card.Body>
                  </Card>
                </Col>
                <Col xs lg="4 px-md-5">
                  <Card>
                    <Card.Img variant="top" src="./img/1.jpg" />
                    <Card.Body>
                      <Card.Title>Card Course</Card.Title>
                      <Card.Text>
                        {" "}
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </Card.Text>
                      <button
                        className="btn"
                        type="button"
                        style={{ backgroundColor: "#EE2B33", color: "white" }}
                      >
                        {" "}
                        Our Course{" "}
                      </button>
                      <Form.Label></Form.Label>
                      <ProgressBar
                        variant="success"
                        now={now}
                        label={`${now}%`}
                        visuallyHidden
                      />
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </HotelSidebar>
    </div>
  );
}

export default Hotelcourse;
