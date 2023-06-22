import React from "react";
import { Container, Card, Form } from "react-bootstrap";

function ForgotPassword() {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <Container>
            <Card className="card2">
              <Card.Body>
                <Card.Title className="text-center">Password Reset</Card.Title>
                <div className="mb-3">
                  <label className="md mb-1 text-left">Your Username</label>
                  <input
                    className="form-control"
                    id=""
                    type="text"
                    placeholder="Username"
                  />
                </div>
                <div className="mb-3">
                  <label className="md mb-1">Email ID / Mobile Number</label>
                  <input
                    className="form-control"
                    id=""
                    type="text"
                    placeholder="Email ID / Mobile Number"
                  />
                </div>
                <button
                  className="btn"
                  type="button"
                  style={{ backgroundColor: "#EE2B33", color: "white" }}
                >
                  Password Reset
                </button>
                <Form.Label></Form.Label>
              </Card.Body>
            </Card>
          </Container>
        </div>
      </div>
    </>
  );
}

export default ForgotPassword;
