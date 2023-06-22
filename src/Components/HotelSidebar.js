import React from "react";
import { useState } from "react";
import {
  FaTh,
  FaBars,
  FaExchangeAlt,
  FaBook,
  // FaCertificate,
  // FaRegAddressBook,
} from "react-icons/fa";
import { MdLogout } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { NavLink } from "react-router-dom";

function HotelSidebar({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const menuItem = [
    {
      path: "/Hotel",
      name: "Dashboard",
      icon: <FaTh />,
    },
    {
      path: "/Hotelcourse",
      name: "My Course",
      icon: <FaBook />,
    },
    // {
    //   path: "#",
    //   name: "Course Request",
    //   icon: <FaBook />,
    // },
    // {
    //   path: "/Hotelexam",
    //   name: "Exam",
    //   icon: <FaRegAddressBook />,
    // },
    // {
    //   path: "/HotelCertificate",
    //   name: "Certificate",
    //   icon: <FaCertificate />,
    // },
    {
      path: "/Hotelprofile",
      name: "Profile",
      icon: <CgProfile />,
    },
    {
      path: "/hchange",
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
              Hotel
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

export default HotelSidebar;
