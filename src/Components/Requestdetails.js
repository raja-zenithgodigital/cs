import React from "react";
import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBInput,
  MDBCheckbox,
  MDBTabsItem,
  MDBTabs,
} from "mdb-react-ui-kit";

function App() {
  return (
    <MDBContainer>
      <div
        className="card3 p-3 my-5 h-custom"
        style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
      >
        <MDBRow className="g-0">
          <MDBCol col="10" md="6">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
              class="img-fluid"
              alt=""
            />
          </MDBCol>

          <MDBCol col="4" md="6">
            <MDBInput
              className="mb-4"
              label=""
              id="form1"
              placeholder="Full Name"
              type="text"
            />
            <MDBInput
              className="mb-4"
              label=""
              id="form1"
              placeholder="Employee Id"
              type="text"
            />
            <MDBInput
              className="mb-4"
              label=""
              id="form1"
              placeholder="Company Email"
              type="text"
            />
            <MDBInput
              className="mb-4"
              label=""
              id="form1"
              placeholder="Mobile"
              type="text"
            />
            <MDBInput
              className="mb-4"
              label=""
              id="form1"
              placeholder="Designation"
              type="text"
            />
            <MDBInput
              className="mb-4"
              label=""
              id="form1"
              placeholder="Branch"
              type="text"
            />
            <MDBInput
              className="mb-4"
              label=""
              id="form1"
              placeholder="Manager Name"
              type="text"
            />
            <MDBInput
              className="mb-4"
              label=""
              id="form1"
              placeholder="Address"
              type="text"
            />
            <MDBCheckbox
              name="flexCheck"
              value=""
              id="flexCheckDefault"
              label="Remember me"
            />
            <MDBTabs
              pills
              justify
              className="mb-3 d-flex flex-row justify-content-between"
            >
              <MDBTabsItem>
                <button
                  type="button"
                  className="btn btn-sucess mb-4 "
                  style={{
                    backgroundColor: "rgb(44, 87, 119)",
                    color: "white",
                  }}
                >
                  Submit
                </button>
              </MDBTabsItem>
            </MDBTabs>
          </MDBCol>
        </MDBRow>
      </div>
    </MDBContainer>
  );
}

export default App;
