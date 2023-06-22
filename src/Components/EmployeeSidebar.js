import React from "react";
import { useState } from "react";
import {
  FaTh,
  FaBars,
  FaExchangeAlt,
  FaBook,
  // FaBookReader,
  // FaCertificate,
  // FaHouseUser,
} from "react-icons/fa";
import { MdLogout } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { NavLink } from "react-router-dom";

function EmployeeSidebar({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const menuItem = [
    {
      path: "/employee",
      name: "Dashboard",
      icon: <FaTh />,
    },
    {
      path: "/employcourse",
      name: "My Course",
      icon: <FaBook />,
    },
    // {
    //   path: "#",
    //   name: "Course Request",
    //   icon: <FaBook />,
    // },
    // {
    //   path: "/employeeexam",
    //   name: "Exam",
    //   icon: <FaBookReader />,
    // },
    // {
    //   path: "/ecertificate",
    //   name: "Certificate",
    //   icon: <FaCertificate />,
    // },
    {
      path: "/eprofile",
      name: "Profile",
      icon: <CgProfile />,
    },
    {
      path: "/echange",
      name: "Change Password",
      icon: <FaExchangeAlt />,
    },
    {
      path: "#",
      name: "Logout",
      icon: <MdLogout />,
    },
  ];
  return (
    <>
      <div className="sidebarMenu">
        <div style={{ width: isOpen ? "200px" : "50px" }} className="sidebar">
          <div className="top_section" style={{ padding: "10px 15px" }}>
            <h4 style={{ display: isOpen ? "block" : "none" }} className="logo">
              Employee
            </h4>
            <div
              style={{ marginLeft: isOpen ? "95px" : "0px" }}
              className="bars"
            >
              <FaBars onClick={toggle} />
            </div>
          </div>
          {menuItem.map((item, index) => (
            <NavLink
              to={item.path}
              key={index}
              className="link"
              activeclassName="active"
            >
              <div className="icon">{item.icon}</div>
              <div
                style={{ display: isOpen ? "block" : "none" }}
                className="link_text"
              >
                {item.name}
              </div>
            </NavLink>
          ))}
        </div>
        <main>{children}</main>
      </div>
    </>
  );
}

export default EmployeeSidebar;
