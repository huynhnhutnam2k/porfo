import React from "react";
// @ts-ignore
import CV from "../../asset/HNNCV.pdf";
import "./banner.scss";
const Banner = () => {
  return (
    <div className="banner">
      <div className="banner-container">
        <h2 className="">Hello,</h2>
        <h2 className="">I'm Huynh Nhut Nam</h2>
        <h3 className="">I'm frontend developer</h3>
      </div>
      <div className="banner-resume">
        <a href={CV} download className="">
          My Resume
        </a>
      </div>
    </div>
  );
};

export default Banner;
