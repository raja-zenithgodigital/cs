import React from "react";
import { Container, Card, Row, Col, Form } from "react-bootstrap";

function Courselist() {
  return (
    <div>
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
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </div>
  );
}

export default Courselist;
