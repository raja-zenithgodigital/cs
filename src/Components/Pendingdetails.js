import React from "react";
import { MDBTable, MDBTableHead, MDBTableBody } from "mdb-react-ui-kit";
import Button from "react-bootstrap/Button";

function Pendingdetails() {
  return (
    <div>
      <section style={{ backgroundColor: "#eee" }}>
        <MDBTable align="middle">
          <MDBTableHead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Hotel Name</th>
              <th scope="col">Hotel Addcourse</th>
              <th scope="col">Name +4</th>
              <th scope="col">View Certificate</th>
              <th scope="col">View Details</th>
              <th scope="col">Actions</th>
            </tr>
          </MDBTableHead>
          <MDBTableBody>
            <tr>
              <td>01</td>
              <td>
                <div className="d-flex align-items-center">
                  <img
                    src="https://mdbootstrap.com/img/new/avatars/6.jpg"
                    alt=""
                    style={{ width: "45px", height: "45px" }}
                    className="rounded-circle"
                  />
                  <div className="ms-3">
                    <p className="fw-bold mb-1">demo demo</p>
                    <p className="text-muted mb-0">demo@gmail.com</p>
                  </div>
                </div>
              </td>
              <td>
                <p className="fw-normal mb-1">Rajeev chowk</p>
                <p className="text-muted mb-0">New Delhi</p>
              </td>
              <td>
                <p className="fw-normal mb-1">demo</p>
              </td>
              <td>
                <Button className="btn-info" rounded size="sm">
                  Certificate
                </Button>
              </td>
              <td>
                <Button className="btn-success" rounded size="sm">
                  Details
                </Button>
              </td>
              <td>
                <Button className="btn-primary" rounded size="sm">
                  Edit
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
                    <p className="fw-bold mb-1">demo demo</p>
                    <p className="text-muted mb-0">demo@gmail.com</p>
                  </div>
                </div>
              </td>
              <td>
                <p className="fw-normal mb-1">Rajeev chowk</p>
                <p className="text-muted mb-0">New Delhi</p>
              </td>
              <td>
                <p className="fw-normal mb-1">demo</p>
              </td>
              <td>
                <Button className="btn-info" rounded size="sm">
                  Certificate
                </Button>
              </td>
              <td>
                <Button className="btn-success" rounded size="sm">
                  Details
                </Button>
              </td>
              <td>
                <Button className="btn-primary" rounded size="sm">
                  Edit
                </Button>
              </td>
            </tr>
            <tr>
              <td>03</td>
              <td>
                <div className="d-flex align-items-center">
                  <img
                    src="https://mdbootstrap.com/img/new/avatars/6.jpg"
                    alt=""
                    style={{ width: "45px", height: "45px" }}
                    className="rounded-circle"
                  />
                  <div className="ms-3">
                    <p className="fw-bold mb-1">demo demo</p>
                    <p className="text-muted mb-0">demo@gmail.com</p>
                  </div>
                </div>
              </td>
              <td>
                <p className="fw-normal mb-1">Rajeev chowk</p>
                <p className="text-muted mb-0">New Delhi</p>
              </td>
              <td>
                <p className="fw-normal mb-1">demo</p>
              </td>
              <td>
                <Button className="btn-info" rounded size="sm">
                  Certificate
                </Button>
              </td>
              <td>
                <Button className="btn-success" rounded size="sm">
                  Details
                </Button>
              </td>
              <td>
                <Button className="btn-primary" rounded size="sm">
                  Edit
                </Button>
              </td>
            </tr>
          </MDBTableBody>
        </MDBTable>
      </section>
    </div>
  );
}

export default Pendingdetails;
