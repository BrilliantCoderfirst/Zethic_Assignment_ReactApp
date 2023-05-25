import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareFacebook,
  faSquareInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <>
      <footer className="footContainer">
        <div className="footer">
          <div className="left_footer">
            <h1>
              Discover <br /> Plots
            </h1>
            <p>Lorem is the dummy text.</p>
          </div>
          <div className="right_footer">
            <div className="one">
              <p>Company</p>
              <ul>
                <li>Contact</li>
              </ul>
            </div>
            <div className="two">
              <p>Who will help</p>
              <ul>
                <li>Customers</li>
                <li>Brokers</li>
                <li>Lenders</li>
              </ul>
            </div>
            <div className="three">
              <p>Follow us</p>
              <ul>
                <li>
                  {" "}
                  <span>
                    <FontAwesomeIcon icon={faSquareFacebook} />
                  </span>{" "}
                  Facebook
                </li>
                <li>
                  <span>
                    <FontAwesomeIcon icon={faSquareInstagram} />
                  </span>
                  Instagram
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="lastFooter">
          <div className="left_lastFooter">
            <p>Copyright @ 2023 City Plots</p>
          </div>
          <div className="right_lastFooter">
            <p>Privacy Policy</p>
            <p>Privacy Collection Notice</p>
            <p>Terms</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
