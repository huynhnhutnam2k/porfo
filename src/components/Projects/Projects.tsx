/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-has-content */
import { collection } from "firebase/firestore";
import React, { useState, useEffect } from "react";
import { db } from "../../firebase/config";
import { onSnapshot } from "firebase/firestore";
import "./projects.scss";
interface IProject {
  id: string;
  link: string;
  linkGithub: string;
  name: string;
  tech: string[];
  image?: string;
}
interface IProps {
  projectRef?: any;
}
const Projects: React.FC<IProps> = ({ projectRef }) => {
  const [projects, setProjects] = useState<IProject[] | []>([]);
  const projectCol = collection(db, "project");
  useEffect(() => {
    const getProject = () => {
      onSnapshot(projectCol, (snapshot) => {
        let project: any = [];
        snapshot.docs.forEach((doc) => {
          project.push({
            id: doc.id,
            ...doc.data(),
          });
        });
        setProjects(project);
      });
    };
    getProject();
  }, []);
  return (
    <div className="project" ref={projectRef}>
      <div className="project-container">
        <div className="title">Projects</div>

        <div className="project-layout">
          {projects?.length !== 0 ? (
            projects.map((item) => (
              <div className="project-item">
                <img src={item.image} alt="" />
                <div className="project-tech">
                  {item.tech.map((i) => (
                    <div className="project-tech__item" key={i}>
                      {i}
                    </div>
                  ))}
                </div>
                <div className="project-item__info">
                  <div className="project-item__name">{item.name}</div>
                  <a href={item.link}>Demo</a>
                  <br />
                  <a href={item.linkGithub}>Link github</a>
                  <div className="project-item__desc">
                    {/* Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     */}
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Expedita eum magni dolore necessitatibus veniam, maxime
                    perspiciatis quos soluta iusto mollitia.
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="center">
              <div className="loading"></div>
            </div>
          )}
        </div>
        <div className="project-more">
          <a href="https://github.com/huynhnhutnam2k">See more in my github</a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
