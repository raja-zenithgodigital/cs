import React from "react";
import { NavLink } from "react-router-dom";
import { MDBTabs, MDBTabsItem, MDBInput, MDBCheckbox } from "mdb-react-ui-kit";

function EmployeeLogin() {
  return (
    <>
      <div className="bg-image">
        <MDBInput
          className="mb-4 mt-5"
          label=""
          id="form1"
          placeholder="Employee ID"
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
              Start Course
            </button>
          </MDBTabsItem>
          &nbsp;&nbsp;&nbsp;
          <MDBTabsItem>
            <NavLink to="/requestdetails">
              <button
                type="button"
                className="btn btn-sucess mb-4 "
                style={{
                  backgroundColor: "rgb(44, 87, 119)",
                  color: "white",
                }}
              >
                Request Course
              </button>
            </NavLink>
          </MDBTabsItem>
        </MDBTabs>
      </div>
    </>
  );
}

export default EmployeeLogin;
