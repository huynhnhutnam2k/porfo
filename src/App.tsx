import React, { useEffect, useRef, useState } from "react";
import "./App.scss";
import About from "./components/About/About";
import Banner from "./components/Banner/Banner";
import Contact from "./components/Contact/Contact";
import Experience from "./components/Experience/Experience";
import Header from "./components/Header/Header";
import Projects from "./components/Projects/Projects";
function App() {
  const projectRef = useRef<any>();
  const contactRef = useRef<any>();
  const aboutRef = useRef<any>();
  const experienceRef = useRef<any>();
  const [element, setElement] = useState<string | undefined>(undefined);
  useEffect(() => {
    const getHeight = (element: string | undefined) => {
      let height = 0;
      switch (element) {
        case "projectRef":
          height = projectRef?.current?.offsetTop;
          break;
        case "contactRef":
          height = contactRef?.current?.offsetTop;
          break;
        case "aboutRef":
          height = aboutRef?.current?.offsetTop;
          break;
        case "experienceRef":
          height = experienceRef?.current?.offsetTop;
          break;
        default:
          height = 0;
      }
      return height;
    };
    const height = getHeight(element);
    window.scrollTo({
      top: height,
      left: 0,
      behavior: "smooth",
    });
  }, [element]);
  return (
    <div className="main">
      <Header element={element} setElement={setElement}></Header>
      <Banner></Banner>
      <Projects projectRef={projectRef}></Projects>
      <About aboutRef={aboutRef}></About>
      <Experience experienceRef={experienceRef}></Experience>
      <Contact contactRef={contactRef}></Contact>
    </div>
  );
}

export default App;
