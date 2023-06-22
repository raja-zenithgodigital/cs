import React from "react";
import { useState } from "react";
import {
  FaTh,
  FaBars,
  FaExchangeAlt,
  // FaBook,
  FaUsers,
  // FaHotel,
  // FaUserCircle,
  FaCertificate,
  FaHouseUser,
  // FaRegAddressBook,
  // FaBookReader,
} from "react-icons/fa";
import { VscRequestChanges } from "react-icons/vsc";
import { MdLogout } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { NavLink } from "react-router-dom";

function Sidebar({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const menuItem = [
    {
      path: "/",
      name: "Dashboard",
      icon: <FaTh />,
    },
    {
      path: "/Hoteldetails",
      name: "Hotel Details",
      icon: <FaHouseUser />,
    },
    {
      path: "/employeedetails",
      name: "Employee Details",
      icon: <FaUsers />,
    },
    {
      path: "/details",
      name: "Request Details",
      icon: <VscRequestChanges />,
    },
    // {
    //   path: "#",
    //   name: "Hotel Exam",
    //   icon: <FaRegAddressBook />,
    // },
    // {
    //   path: "#",
    //   name: "Employee Exam",
    //   icon: <FaBookReader />,
    // },
    {
      path: "/certificate",
      name: "Certificate",
      icon: <FaCertificate />,
    },
    // {
    //   path: "#",
    //   name: "Hotel User",
    //   icon: <FaHotel />,
    // },
    // {
    //   path: "#",
    //   name: "Employee User",
    //   icon: <FaUserCircle />,
    // },
    {
      path: "/profile",
      name: "Profile",
      icon: <CgProfile />,
    },
    {
      path: "/change",
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
              Admin
            </h4>
            <div
              style={{ marginLeft: isOpen ? "75px" : "0px" }}
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

export default Sidebar;
