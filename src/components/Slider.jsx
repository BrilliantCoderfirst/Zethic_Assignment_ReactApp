import React from "react";
import { Carousel } from "3d-react-carousal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import Image1 from "../assets/img/Rectangle66.png";
import Image2 from "../assets/img/Rectangle67.png";
import Image3 from "../assets/img/Rectangle68.png";

const Slider = () => {
  let slides = [
    <img className="first_image_slider" src={Image3} alt="1" />,
    <img src={Image1} alt="2" />,
    <img src={Image2} alt="5" />,
  ];

  return (
    <>
      <Carousel slides={slides} interval={1000} />
      <div className="buttons">
        <div className="btn_space">
          <button>
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
          <button>
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>
      </div>
    </>
  );
};

export default Slider;
