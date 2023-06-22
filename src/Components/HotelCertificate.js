import React from "react";
import { Navbar, Table, Button } from "react-bootstrap";
import { FaRegUserCircle, FaEyeSlash } from "react-icons/fa";
import { GrCertificate } from "react-icons/gr";
import { FiEdit, FiLogIn } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import { NavLink } from "react-router-dom";
import HotelSidebar from "../Components/HotelSidebar.js";

function HotelCertificate() {
  return (
    <>
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
          <GrCertificate color="#A09E9D" fontSize="2.1em" />
          <h5 className="d-inline " style={{ fontSize: "20px" }}>
            Certificates
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
        <div className="tableList pl-2">
          <Table style={{ width: "120%" }}>
            <thead>
              <tr>
                <th>
                  <input type="checkbox" />
                </th>
                <th>#</th>
                <th> Name</th>
                <th>Hotel Address</th>
                <th>Email</th>
                <th>Status</th>
                <th>View Details</th>
                <th>Certificates</th>
                <th>Options</th>
                <th>Student Login</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <input type="checkbox" />
                </td>
                <td>1</td>
                <td> john mark </td>
                <td> new yourk </td>
                <td>johnmark@gmail.com</td>
                <td>Pending</td>
                <td>
                  <NavLink to="/Hoteldetails">
                    <FaEyeSlash color="Red" fontSize="1.5em" />
                  </NavLink>
                </td>
                <td>
                  <Button variant="primary">Download</Button>{" "}
                </td>
                <td>
                  <NavLink to="/ehdetails">
                    <FiEdit color="green" fontSize="1.5em" />
                  </NavLink>
                  &nbsp;
                  <MdDelete color="#DC3545" fontSize="1.9em" />
                </td>
                <td>
                  <NavLink to="#">
                    <FiLogIn color="green" fontSize="1.5em" />
                  </NavLink>
                  &nbsp;
                </td>
              </tr>
              <tr>
                <td>
                  <input type="checkbox" />
                </td>
                <td>1</td>
                <td> john mark </td>
                <td> new yourk </td>
                <td>johnmark@gmail.com</td>
                <td>Pending</td>
                <td>
                  <NavLink to="/Hoteldetails">
                    <FaEyeSlash color="Red" fontSize="1.5em" />
                  </NavLink>
                </td>
                <td>
                  <Button variant="danger">Pending</Button>{" "}
                </td>
                <td>
                  <NavLink to="/ehdetails">
                    <FiEdit color="green" fontSize="1.5em" />
                  </NavLink>
                  &nbsp;
                  <MdDelete color="#DC3545" fontSize="1.9em" />
                </td>

                <td>
                  <NavLink to="#">
                    <FiLogIn color="green" fontSize="1.5em" />
                  </NavLink>
                  &nbsp;
                </td>
              </tr>
              <tr>
                <td>
                  <input type="checkbox" />
                </td>
                <td>1</td>
                <td> john mark </td>
                <td> new yourk </td>
                <td>johnmark@gmail.com</td>
                <td>Pending</td>
                <td>
                  <NavLink to="/Hoteldetails">
                    <FaEyeSlash color="Red" fontSize="1.5em" />
                  </NavLink>
                </td>
                <td>
                  <Button variant="primary">Download</Button>{" "}
                </td>
                <td>
                  <NavLink to="/ehdetails">
                    <FiEdit color="green" fontSize="1.5em" />
                  </NavLink>
                  &nbsp;
                  <MdDelete color="#DC3545" fontSize="1.9em" />
                </td>
                <td>
                  <NavLink to="#">
                    <FiLogIn color="green" fontSize="1.5em" />
                  </NavLink>
                  &nbsp;
                </td>
              </tr>
              <tr>
                <td>
                  <input type="checkbox" />
                </td>
                <td>1</td>
                <td> john mark </td>
                <td> new yourk </td>
                <td>johnmark@gmail.com</td>
                <td>Pending</td>
                <td>
                  <NavLink to="/Hoteldetails">
                    <FaEyeSlash color="Red" fontSize="1.5em" />
                  </NavLink>
                </td>
                <td>
                  <Button variant="primary">Download</Button>{" "}
                </td>
                <td>
                  <NavLink to="/ehdetails">
                    <FiEdit color="green" fontSize="1.5em" />
                  </NavLink>
                  &nbsp;
                  <MdDelete color="#DC3545" fontSize="1.9em" />
                </td>
                <td>
                  <NavLink to="#">
                    <FiLogIn color="green" fontSize="1.5em" />
                  </NavLink>
                  &nbsp;
                </td>
              </tr>
              <tr>
                <td>
                  <input type="checkbox" />
                </td>
                <td>1</td>
                <td> john mark </td>
                <td> new yourk </td>
                <td>johnmark@gmail.com</td>
                <td>Pending</td>
                <td>
                  <NavLink to="/Hoteldetails">
                    <FaEyeSlash color="Red" fontSize="1.5em" />
                  </NavLink>
                </td>
                <td>
                  <Button variant="primary">Download</Button>{" "}
                </td>
                <td>
                  <NavLink to="/ehdetails">
                    <FiEdit color="green" fontSize="1.5em" />
                  </NavLink>
                  &nbsp;
                  <MdDelete color="#DC3545" fontSize="1.9em" />
                </td>
                <td>
                  <NavLink to="#">
                    <FiLogIn color="green" fontSize="1.5em" />
                  </NavLink>
                  &nbsp;
                </td>
              </tr>
              <tr>
                <td>
                  <input type="checkbox" />
                </td>
                <td>1</td>
                <td> john mark </td>
                <td> new yourk </td>
                <td>johnmark@gmail.com</td>
                <td>Pending</td>
                <td>
                  <NavLink to="/Hoteldetails">
                    <FaEyeSlash color="Red" fontSize="1.5em" />
                  </NavLink>
                </td>
                <td>
                  <Button variant="primary">Download</Button>{" "}
                </td>
                <td>
                  <NavLink to="/ehdetails">
                    <FiEdit color="green" fontSize="1.5em" />
                  </NavLink>
                  &nbsp;
                  <MdDelete color="#DC3545" fontSize="1.9em" />
                </td>
                <td>
                  <NavLink to="#">
                    <FiLogIn color="green" fontSize="1.5em" />
                  </NavLink>
                  &nbsp;
                </td>
              </tr>
              <tr>
                <td>
                  <input type="checkbox" />
                </td>
                <td>1</td>
                <td> john mark </td>
                <td> new yourk </td>
                <td>johnmark@gmail.com</td>
                <td>Pending</td>
                <td>
                  <NavLink to="/Hoteldetails">
                    <FaEyeSlash color="Red" fontSize="1.5em" />
                  </NavLink>
                </td>
                <td>
                  <Button variant="primary">Download</Button>{" "}
                </td>
                <td>
                  <NavLink to="/ehdetails">
                    <FiEdit color="green" fontSize="1.5em" />
                  </NavLink>
                  &nbsp;
                  <MdDelete color="#DC3545" fontSize="1.9em" />
                </td>
                <td>
                  <NavLink to="#">
                    <FiLogIn color="green" fontSize="1.5em" />
                  </NavLink>
                  &nbsp;
                </td>
              </tr>
              <tr>
                <td>
                  <input type="checkbox" />
                </td>
                <td>1</td>
                <td> john mark </td>
                <td> new yourk </td>
                <td>johnmark@gmail.com</td>
                <td>Pending</td>
                <td>
                  <NavLink to="/Hoteldetails">
                    <FaEyeSlash color="Red" fontSize="1.5em" />
                  </NavLink>
                </td>
                <td>
                  <Button variant="primary">Download</Button>{" "}
                </td>
                <td>
                  <NavLink to="/ehdetails">
                    <FiEdit color="green" fontSize="1.5em" />
                  </NavLink>
                  &nbsp;
                  <MdDelete color="#DC3545" fontSize="1.9em" />
                </td>
                <td>
                  <NavLink to="#">
                    <FiLogIn color="green" fontSize="1.5em" />
                  </NavLink>
                  &nbsp;
                </td>
              </tr>
              <tr>
                <td>
                  <input type="checkbox" />
                </td>
                <td>1</td>
                <td> john mark </td>
                <td> new yourk </td>
                <td>johnmark@gmail.com</td>
                <td>Pending</td>
                <td>
                  <NavLink to="/Hoteldetails">
                    <FaEyeSlash color="Red" fontSize="1.5em" />
                  </NavLink>
                </td>
                <td>
                  <Button variant="primary">Download</Button>{" "}
                </td>
                <td>
                  <NavLink to="/ehdetails">
                    <FiEdit color="green" fontSize="1.5em" />
                  </NavLink>
                  &nbsp;
                  <MdDelete color="#DC3545" fontSize="1.9em" />
                </td>
                <td>
                  <NavLink to="#">
                    <FiLogIn color="green" fontSize="1.5em" />
                  </NavLink>
                  &nbsp;
                </td>
              </tr>
              <tr>
                <td>
                  <input type="checkbox" />
                </td>
                <td>1</td>
                <td> john mark </td>
                <td> new yourk </td>
                <td>johnmark@gmail.com</td>
                <td>Pending</td>
                <td>
                  <NavLink to="/details">
                    <FaEyeSlash color="Red" fontSize="1.5em" />
                  </NavLink>
                </td>
                <td>
                  <Button variant="primary">Download</Button>{" "}
                </td>
                <td>
                  <NavLink to="/ehdetails">
                    <FiEdit color="green" fontSize="1.5em" />
                  </NavLink>
                  &nbsp;
                  <MdDelete color="#DC3545" fontSize="1.9em" />
                </td>
                <td>
                  <NavLink to="#">
                    <FiLogIn color="green" fontSize="1.5em" />
                  </NavLink>
                  &nbsp;
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
      </HotelSidebar>
    </>
  );
}

export default HotelCertificate;
