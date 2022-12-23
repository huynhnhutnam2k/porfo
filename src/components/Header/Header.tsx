/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import "./header.scss";
import IonIcon from "@reacticons/ionicons";
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
  const [active, setActive] = useState<boolean>(false);
  return (
    <div className="header">
      <div className="header-mobile">
        <div
          className="header-mobile__button"
          onClick={() => setActive(!active)}
        >
          <IonIcon name="menu-outline"></IonIcon>
        </div>
        <div className={`header-menu__content ${active ? "active" : ""}`}>
          <div className="header-mobile__menu">
            <div
              className="header-mobile__button"
              onClick={() => {
                setActive(!active);
              }}
            >
              <IonIcon name="close-outline"></IonIcon>
            </div>
          </div>
          <div className="header-mobile__layout">
            {nav.map((item) => (
              <div className="header-item">
                <a
                  href="#"
                  onClick={() => {
                    setActive(!active);
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
