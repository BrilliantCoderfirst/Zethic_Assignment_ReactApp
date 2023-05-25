import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Group_1 from "../assets/img/Group1.png";
import Rectangle_152 from "../assets/img/Rectangle152.png";
import Group from "../assets/img/Group.png";
import Slider from "../components/Slider";
import Star1 from "../assets/img/Star1.svg";
import logo5 from "../assets/img/logo1.png";
import logo2 from "../assets/img/logo2.png";
import logo3 from "../assets/img/logo3.png";
import logo4 from "../assets/img/logo4.png";
import logo1 from "../assets/img/logo5.png";
import Image31 from "../assets/img/31.svg";
import Rectangle155 from "../assets/img/Rectangle155.png";
import Rectangle131 from "../assets/img/Rectangle131.png";
import Rectangle133 from "../assets/img/Rectangle133.png";
import Rectangle134 from "../assets/img/Rectangle134.png";
import Vector1 from "../assets/img/Vector1.png";
import Rectangle127 from "../assets/img/Rectangle127.png";
import Hard from "../assets/img/hard.png";
import Rectangle128 from "../assets/img/Rectangle128.png";
import Rectangle129 from "../assets/img/Rectangle129.png";
import Vector from "../assets/img/Vector.png";
import Vector2 from "../assets/img/Vector2.png";
import Button from "../components/Button";
import Card from "../components/Card";

const Home = () => {
  return (
    <>
      <section className="section_02">
        <div className="center_section_02">
          <div className="top_part_section02">
            <div className="leftPart_top">
              <img src={Rectangle127} alt="" />
            </div>
            <div className="bottomPart_top">
              <h1>
                Discover Your Perfect <br />
                Plot of Land.
              </h1>
              <p>Starting at</p>
              <p>
                <span>₹3999</span>per.sqft{" "}
              </p>
              <div className="inner_bottomPartTop">
                <input placeholder="Search area or location..." type="text" />
                <select name="" id="">
                  <option value="One">$ Budget</option>
                  <option value="Two">$ Rupees</option>
                </select>
                <Button text="Search" />
              </div>
            </div>

            <div className="image">
              <img src={Star1} alt="" />
            </div>
          </div>

          <div className="bottom_part_section02">
            <div className="leftPart_bottom">
              <div className="inner_top_leftPartBottom">
                <div className="one">
                  <p>437k+</p>
                  <p>Happy Customers</p>
                </div>
                <div className="two">
                  <p>340K+</p>
                  <p>Landmark near chennai</p>
                </div>
                <div className="three">
                  <p>4.3m+</p>
                  <p>Sq. feet Developed</p>
                </div>
              </div>
              <div className="inner_bottom_leftPartBottom">
                <p>
                  <i>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Explicabo sapiente, enim veniam iste magni pariatur omnis
                    minus esse velit culpa.
                  </i>
                </p>
              </div>
            </div>
            <div className="rightPart_bottom">
              <div className="top_rightPartBottom">
                <img src={Hard} alt="" />
                <p>Trending Projects</p>
              </div>
              <div className="bottom_rightPartBottom">
                <img src={Rectangle128} alt="" />
                <img src={Rectangle129} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section_03">
        <div className="center_section_03">
          <img src={logo1} alt="" />
          <img src={logo2} alt="" />
          <img src={logo3} alt="" />
          <img src={logo4} alt="" />
          <img src={logo5} alt="" />
        </div>
      </section>

      <section className="section_04">
        <div className="center_section_04">
          <div className="text">
            <p className="first_heading_text">Explore Our Collections</p>
            <div className="textPart">
              <div className="left_textPart">
                <img src={Rectangle155} alt="" />
                <img src={Image31} alt="" />
                <img src={Rectangle155} alt="" />
              </div>
              <div className="right_textPart">
                <p>
                  <i> Corner Plots </i>
                </p>
              </div>
            </div>
          </div>
          <div className="images">
            <div className="top_part">
              <img src={Rectangle131} alt="" />
              <img src={Rectangle134} alt="" />
              <img src={Rectangle133} alt="" />
            </div>
            <div className="bottom_part">
              <span>
                <FontAwesomeIcon icon={faArrowRight} />
              </span>
              <p>Explore More</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section_unique">
        <div className="center_section_unique">
          <div className="center">
            <p className="heading">Project Amenities</p>
            <ul>
              <li>Children’s Play Arena</li>
              <li>Street Lights</li>
              <li>24 X 7 Security</li>
              <li>Avenue Trees</li>
            </ul>
          </div>
          <div className="images">
            <img src={Vector} alt="" />
            <img src={Vector2} alt="" />
          </div>
        </div>
      </section>

      <section className="section_05">
        <div className="center_section_05">
          <div className="heading">
            <p>Feature Projects</p>
          </div>
          <div className="btns">
            <div className="left_btn">
              <Button className="active" text="Egmore" />
              <Button text="Koyambedu" />
              <Button text="Sholinganallur" />
              <Button text="Choolaimedu" />
              <Button text="Greams Road" />
              <Button text="Royapettah" />
            </div>
            <div className="right_btn">
              <button>
                <FontAwesomeIcon icon={faChevronLeft} />
              </button>
              <button>
                <FontAwesomeIcon icon={faChevronRight} />
              </button>
            </div>
          </div>
          <div className="cards">
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </section>

      <section className="section_06">
        <div className="center_section_06">
          <div className="left_section06">
            <div className="boxIcon">
              <img src={Group_1} alt="" />
            </div>
            <img className="mainImage" src={Rectangle_152} alt="" />
          </div>

          <div className="center_section06">
            <p>Project Highlights</p>
            <p>Near To School</p>
            <p>
              Loreum ispum is the dummy text used to fill the <br /> Contest add
              the loreum used to fill the content <br /> used to fill the
              content and the loreum.
            </p>
            <p>
              <i> Next </i>
            </p>
          </div>
          <div className="right_section06">
            <img src={Group} alt="" />
          </div>
        </div>
      </section>

      <section className="section_07">
        <div className="top_section07">
          <div className="icon_img">
            <img src={Vector1} alt="" />
          </div>
          <div className="para">
            <p>Clients Testimonial</p>
          </div>
        </div>
        <Slider />
      </section>

      <section className="section_08">
        <div className="center_section08">
          <div className="top_section08">
            <p>
              Curious about our land plot offerings in <br /> Chennai? Contact
              us today
            </p>
          </div>
          <div className="bottom_section08">
            <Button text="Schedule a Call" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
