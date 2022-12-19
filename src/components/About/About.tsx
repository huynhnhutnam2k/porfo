import React from "react";

import "./about.scss";
interface IProp {
  aboutRef?: any;
}
const About: React.FC<IProp> = ({ aboutRef }) => {
  return (
    <div className="about" ref={aboutRef}>
      <div className="about-container">
        <div className="title">About me</div>
        <div className="about-layout">
          <div className="about-img">
            <img
              src="https://i.pinimg.com/736x/59/18/d8/5918d8e9040516b65f93c75a9c5b8175.jpg"
              alt=""
            />
          </div>
          <div className="about-content">
            <span>
              I’m an international student from Vietnam who started programming
              back in 2020 and turned it into a hobby
            </span>
            I would like to work in a professional programming environment where
            I can focus on developing my professional skills, and learn new
            programming knowledge to complete the assigned tasks well.
            <span>
              Besides from programming, I also do mobile/web design, listen to
              music, go to the gym,{" "}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
