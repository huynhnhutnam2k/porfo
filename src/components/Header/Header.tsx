/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./header.scss";
const nav = [
  {
    display: "Projects",
    link: "projectRef",
  },
  {
    display: "About",
    link: "aboutRef",
  },
  {
    display: "Experience",
    link: "experienceRef",
  },
  {
    display: "Contact",
    link: "contactRef",
  },
];
interface IProps {
  element?: string;
  setElement?: any;
}
const Header: React.FC<IProps> = ({ element, setElement }) => {
  return (
    <div className="header">
      <div className="header-container">
        <div className="header-menu">
          {nav.map((item) => (
            <div className="header-item">
              <a
                href="#"
                onClick={() => {
                  setElement(item.link);
                }}
              >
                {item.display}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
