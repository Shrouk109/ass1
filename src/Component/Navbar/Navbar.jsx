/*eslint-disable*/
import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import styles from "./Navbar.module.scss";
import "../../index.css";

export default function Navbar() {
  // let location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // useEffect(() => {
  //   if (location.pathname == "/about") {
  //     document.title = "About";
  //   } else if (location.pathname == "/portfolio") {
  //     document.title = "Portfolio";
  //   } else if (location.pathname == "/contact") {
  //     document.title = "Contact";
  //   } else if (location.pathname == "/") {
  //     document.title = "Home";
  //   } else {
  //     document.title = "NotFound";
  //   }
  // }, [location]);

  return (
    <>
      <nav
        className={`navbar navbar-expand-lg navbar-light py-4 ${styles["bg-dark-gray"]} fixed-top`}
      >
        <div className="container">
          <Link
            to={"/"}
            className="navbar-brand fs-2 text-white fw-medium text-uppercase"
          >
            Start Framework
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded={isOpen ? "true" : "false"}
            aria-label="Toggle navigation"
            onClick={toggleMenu}
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className={`collapse navbar-collapse ${isOpen ? "show" : ""}`} 
                        id="navbarNav"
          >
            <ul className="navbar-nav ms-auto ">
              <li className="nav-item me-3">
                <NavLink
                  to={"about"}
                  className="nav-link fw-bold text-white text-uppercase"
                >
                  About
                </NavLink>
              </li>
              <li className="nav-item me-3">
                <NavLink
                  to={"portfolio"}
                  className="nav-link fw-bold text-white text-uppercase"
                >
                  Portfolio
                </NavLink>
              </li>
              <li className="nav-item me-3">
                <NavLink
                  to={"contact"}
                  className="nav-link fw-bold text-white text-uppercase"
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
