import React, { useState } from "react";
import { Container, Card } from "react-bootstrap";
import {
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
  MDBCol,
  MDBRow,
} from "mdb-react-ui-kit";
import HotelLogin from "../Components/HotelLogin.js";
import EmployeeLogin from "../Components/EmployeeLogin.js";

function UserLogin() {
  const [justifyActive, setJustifyActive] = useState("tab1");
  const handleJustifyClick = (value) => {
    if (value === justifyActive) {
      return;
    }

    setJustifyActive(value);
  };
  return (
    <>
      <div className="container-fluid">
        <Container>
          <Card className="card3">
            <Card.Body>
              <MDBRow>
                <MDBCol col="10" md="6">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                    className="img-fluid"
                    alt=" "
                  />
                </MDBCol>
                <MDBCol>
                  <MDBTabs
                    pills
                    justify
                    className="mb-3 d-flex flex-row justify-content-between"
                  >
                    <MDBTabsItem>
                      <MDBTabsLink
                        onClick={() => handleJustifyClick("tab1")}
                        active={justifyActive === "tab1"}
                        style={{
                          backgroundColor: "#EE2B33",
                          color: "white",
                        }}
                      >
                        Hotel Login
                      </MDBTabsLink>
                    </MDBTabsItem>
                    <MDBTabsItem>
                      <MDBTabsLink
                        onClick={() => handleJustifyClick("tab2")}
                        active={justifyActive === "tab2"}
                        style={{
                          backgroundColor: "#EE2B33",
                          color: "white",
                          marginLeft: "0.2rem",
                        }}
                      >
                        Employee Login
                      </MDBTabsLink>
                    </MDBTabsItem>
                  </MDBTabs>
                  <MDBTabsContent>
                    <MDBTabsPane show={justifyActive === "tab1"}>
                      <HotelLogin />
                    </MDBTabsPane>
                    <MDBTabsPane show={justifyActive === "tab2"}>
                      <EmployeeLogin />
                    </MDBTabsPane>
                  </MDBTabsContent>
                </MDBCol>
              </MDBRow>
            </Card.Body>
          </Card>
        </Container>
      </div>
    </>
  );
}

export default UserLogin;
