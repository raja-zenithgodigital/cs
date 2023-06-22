import React, { useState } from "react";
import axios from "axios";
import { Route, Routes, useNavigate } from "react-router-dom";
import {
  MDBContainer,
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
  MDBInput,
  MDBCheckbox,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";
import Form from "react-bootstrap/Form";
import { Label } from "reactstrap";
import Dashboard from "./Dashboard";

function RedirectReactRouterExample() {
  return (
    <Routes>
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}

function AdminLogin() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:5000/api/v1/auth/login", {
        email: email,
        password: password,
      });
      // add userId by user inside localStorage
      console.log("login successfull");
      localStorage.setItem("email", email);
      navigate("/dashboard", { replace: true });
    } catch (err) {
      setMessage("Login Failed");
      console.error({ Error: "loginFailed" });
    }
  };
  const submit = async (e) => {
    e.preventDefault();

    try {
      // data to be stored inside DB
      const data = {
        email,
        mobile,
        name,
        date,
        password,
        confirmpassword,
      };
      const res = await axios
        .post("http://localhost:5000/api/app/register", data)
        .then(() => {
          console.log("Registered");
          localStorage.setItem("email", email);
          navigate("/dashboard", { replace: true });
        })
        .catch((err) => console.log(err));
    } catch (err) {
      console.log({ ERROR: err });
    }
  };

  const [date, setDate] = useState(new Date());
  const [justifyActive, setJustifyActive] = useState("tab1");

  const handleJustifyClick = (value) => {
    if (value === justifyActive) {
      return;
    }

    setJustifyActive(value);
  };

  return (
    <>
      <div className="bg-image">
        <MDBContainer className="p-3 my-5 d-flex flex-column card1">
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
                      backgroundColor: "#2c5777",
                      color: "white",
                    }}
                  >
                    Login
                  </MDBTabsLink>
                </MDBTabsItem>
                <MDBTabsItem>
                  <MDBTabsLink
                    onClick={() => handleJustifyClick("tab2")}
                    active={justifyActive === "tab2"}
                    style={{
                      backgroundColor: "#2c5777",
                      color: "white",
                      marginLeft: "0.2rem",
                    }}
                  >
                    Register
                  </MDBTabsLink>
                </MDBTabsItem>
              </MDBTabs>

              <MDBTabsContent>
                <MDBTabsPane show={justifyActive === "tab1"}>
                  <h3 className="text-center font-weight-bold mt-3 mb-3">
                    sign in
                  </h3>
                  <Form onSubmit={handleSubmit}>
                    <MDBInput
                      className="mb-4"
                      name="email"
                      label=""
                      id="exampleEmail"
                      placeholder="Email / Mobile"
                      type="text"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <MDBInput
                      className="mb-4"
                      name="password"
                      label=""
                      id="examplePassword"
                      placeholder="Password / OTP"
                      type="text"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <Label style={{ color: "red" }}>{message}</Label>
                    <div className="d-flex justify-content-between mb-4">
                      <MDBCheckbox
                        name="flexCheck"
                        value=""
                        id="flexCheckDefault"
                        label="Remember me"
                      />
                      <a href="#" className="ml-3">
                        Enter with OTP
                      </a>
                      <a href="/forgotpassword" className="ml-3">
                        Forgot password?
                      </a>
                    </div>

                    <button
                      type="handleSubmit"
                      className="btn btn-sucess mb-4 w-100"
                      style={{ backgroundColor: "#EE2B33", color: "white" }}
                    >
                      Sign in
                    </button>

                    <p className="text-center">
                      Not a member? <a href="#!">Register</a>
                    </p>
                  </Form>
                </MDBTabsPane>

                <MDBTabsPane show={justifyActive === "tab2"}>
                  <h3 className="text-center font-weight-bold mt-3 mb-3">
                    sign up
                  </h3>

                  <MDBInput
                    className="mb-4"
                    name="email"
                    label=""
                    id="exampleEmail"
                    placeholder="Email"
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <MDBInput
                    className="mb-4"
                    name="mobile"
                    label=""
                    id="exampleMobile"
                    placeholder="Number"
                    type="text"
                    onChange={(e) => setMobile(e.target.value)}
                  />
                  <MDBInput
                    className="mb-4"
                    name="name"
                    label=""
                    id="exampleName"
                    placeholder="Name"
                    type="text"
                    onChange={(e) => setName(e.target.value)}
                  />
                  <Form.Control
                    className="mb-4"
                    type="date"
                    name="datepic"
                    placeholder="DateRange"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                  />
                  <MDBInput
                    className="mb-4"
                    name="password"
                    label=""
                    id="examplePassword"
                    placeholder="Create Password"
                    type="text"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <MDBInput
                    className="mb-4"
                    name="confirmpassword"
                    label=""
                    id="exampleConfirmPassword"
                    placeholder="Confirm Password"
                    type="text"
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                  <div className="d-flex justify-content-center mb-4">
                    <MDBCheckbox
                      name="flexCheck"
                      id="flexCheckDefault"
                      label="I have read and agree to the terms"
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn btn-sucess mb-4 w-100"
                    style={{ backgroundColor: "#EE2B33", color: "white" }}
                  >
                    Sign up
                  </button>
                </MDBTabsPane>
              </MDBTabsContent>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    </>
  );
}

export default AdminLogin;
