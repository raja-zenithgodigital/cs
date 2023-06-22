import React from "react";
import Chart from "chart.js/auto";
import { Pie } from "react-chartjs-2";
import { Navbar, Card, Row, Col } from "react-bootstrap";
import { FaRegUserCircle, FaRegEdit } from "react-icons/fa";
import Sidebar from "../Components/Sidebar.js";

function Dashboard() {
  const data = {
    labels: ["Complete", "Incomplete"],
    datasets: [
      {
        label: "Complete Courses",
        data: [2, 5],
        backgroundColor: ["green", "orange"],
      },
    ],
  };
  return (
    <div>
      <Sidebar>
        <div className="NavButton">
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
          <FaRegEdit color="#A09E9D" fontSize="2.1em" />
          <h5 className="d-inline" style={{ fontSize: "20px" }}>
            Dashboard
          </h5>
        </div>

        <Row className=" mt-4 p-2">
          <Col>
            <a href="/hcomplete" className="box mt-5 mt-m-5">
              <Card
                className="box1 text-center"
                style={{ backgroundColor: "#52accc" }}
              >
                Hotel Completed Course
              </Card>
            </a>

            <a href="/HotelPendingCourse" className="box mt-5 mt-md-5">
              <Card
                className="box1 text-center"
                style={{ backgroundColor: "#52accc" }}
              >
                {" "}
                Hotel Pending Course
              </Card>
            </a>
          </Col>
          <Col className="chart mt-5 mt-md-5 ml-5">
            <h2 className="text">Hotel Chart</h2>
            <Pie data={data} />
          </Col>
          <Col>
            <a href="/ecomplete" className="box mt-5 mt-md-5">
              <Card
                className="box1 text-center"
                style={{ backgroundColor: "#52accc" }}
              >
                {" "}
                Employee Completed Course
              </Card>
            </a>
            <a href="/epending" className="box mt-5 mt-md-5">
              <Card
                className="box1 text-center"
                style={{ backgroundColor: "#52accc" }}
              >
                {" "}
                Employee Pending Course
              </Card>
            </a>
          </Col>
          <Col className="chart mt-5 mt-md-5 ml-5">
            <h2 className="text">Employee Chart</h2>
            <Pie data={data} />
          </Col>
        </Row>

        {/* <div className="container-fluid mt-5">
          <Row className="mt-4">
            <Col xs lg="4 px-md-5">
              <a href="/ecomplete" className="box">
                <Card className="box1"> Employee Completed Course</Card>
              </a>
              <a href="/epending" className="box mt-5">
                <Card className="box1"> Employee Pending Course</Card>
              </a>
            </Col>
            <Col className="chart">
              <Pie data={data} />
            </Col>
          </Row> 
        </div> */}
      </Sidebar>
    </div>
  );
}

export default Dashboard;
