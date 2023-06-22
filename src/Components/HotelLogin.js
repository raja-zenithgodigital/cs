import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import { MDBTabs, MDBTabsItem, MDBInput, MDBCheckbox } from "mdb-react-ui-kit";

function HotelLogin() {
  const [val, setVal] = useState([]);
  const handleAdd = () => {
    const abc = [...val, []];
    setVal(abc);
  };
  const handleChange = (onChangeValue, i) => {
    const inputdata = [...val];
    inputdata[i] = onChangeValue.target.value;
    setVal(inputdata);
  };
  const handleDelete = (i) => {
    const deletVal = [...val];
    deletVal.splice(i, 1);
    setVal(deletVal);
  };
  console.log(val, "data-");
  return (
    <>
      {/* <div className="bg-image"> */}
      <MDBInput
        className="mb-4 mt-5"
        label=""
        id="form1"
        placeholder="Hotel Name"
        type="text"
      />
      <Row>
        <Col>
          <MDBInput
            className="w-100 "
            label=""
            id="form1"
            placeholder="Person Name"
            type="text"
          />
          <button onClick={() => handleAdd()} className="NavLink">
            +1 Add Another Person
          </button>
          {val.map((data, i) => {
            return (
              <div>
                <MDBInput value={data} onChange={(e) => handleChange(e, i)} />
                <NavLink onClick={() => handleDelete(i)}>x</NavLink>
              </div>
            );
          })}
        </Col>
      </Row>
      <MDBInput
        className="mt-2"
        label=""
        id="form1"
        placeholder="Email"
        type="text"
      />
      <MDBInput
        className="mt-4"
        label=""
        id="form1"
        placeholder="Mobile"
        type="text"
      />
      <MDBInput
        className="mt-4 mb-4"
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
        className="mb-3 mt-2 d-flex flex-row justify-content-between"
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
          <button
            type="button"
            className="btn btn-sucess mb-4"
            style={{
              backgroundColor: "rgb(44, 87, 119)",
              color: "white",
            }}
          >
            Send link (Email)
          </button>
        </MDBTabsItem>
      </MDBTabs>
      {/* </div> */}
    </>
  );
}

export default HotelLogin;
