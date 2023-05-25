import React from "react";
import Button from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <>
      <nav className="navContainer">
        <div className="navbar">
          <div className="left_navbar">
            <p>
              Discover <br /> Plots
            </p>
          </div>
          <div className="right_navbar">
            <ul>
              <li className="first_li_rightNavbar">
                <p>Projects</p>
                <FontAwesomeIcon icon={faCaretDown} />
              </li>
              <li>
                <p>Agents</p>
              </li>
              <li>
                <p>Amenities</p>
              </li>
              <li>
                <div className="vertical_line"></div>
              </li>
              <li>
                <p>Sign in</p>
              </li>
              <li>
                <Button text="Schedule a Call" />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
