import React from "react";

import "./experience.scss";
interface IProps {
  experienceRef: any;
}
const Experience: React.FC<IProps> = ({ experienceRef }) => {
  return (
    <div className="experience" ref={experienceRef}>
      <div className="experience-container">
        <div className="title">Experience</div>
        <div className="experience-layout">
          <div className="experience-skill">
            <div className="experience-skill__name">Frontend</div>
            <div className="experience-skill__detail">
              <div className="experience-skill__item">HTML</div>
              <div className="experience-skill__item">CSS</div>
              <div className="experience-skill__item">JAVASCRIPT</div>
              <div className="experience-skill__item">REACTJS</div>
              <div className="experience-skill__item">REDUX, ZUSTAND</div>
            </div>
          </div>
          <div className="experience-skill">
            <div className="experience-skill__name">Backend</div>
            <div className="experience-skill__detail">
              <div className="experience-skill__item">JAVASCRIPT</div>
              <div className="experience-skill__item">MONGODB, MYSQL</div>
              <div className="experience-skill__item">SOCKETIO</div>
              <div className="experience-skill__item">NODEJS, LARAVEL</div>
              {/* <div className="experience-skill__item">REDUX, ZUSTAND</div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
