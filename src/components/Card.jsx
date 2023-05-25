import React from "react";
import Image from "../assets/img/Rectangle143.png";

const Card = () => {
  return (
    <>
      <div className="cardContainer">
        <img src={Image} alt="" />
        <div className="content">
          <p className="para_content">
            Loreum ispum is the dummmy text used to fill the{" "}
          </p>
          <div className="inner_content">
            <p>$16,471</p>
            <p></p>
            <p>2088 sqft</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
