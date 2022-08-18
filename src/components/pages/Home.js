import React, { useRef, useEffect } from "react";

import "./Home.scss";

import Landing from "./Landing";
import About from "./HomeComp/About";
import Projects from "./HomeComp/Projects";
import Contact from "./HomeComp/Contact";

import LeftNav from "../layout/LeftNav";
import RightNav from "../layout/RightNav";

import useScrollTo from "../hooks/useScrollTo";
import { Outlet } from "react-router";

const Home = ({ className }) => {
  const homeRef = useRef();
  const aboutRef = useRef();
  const projectsRef = useRef();
  const contactRef = useRef();

  const [currentScrollTo, setCurrentScrollTo] = useScrollTo(null);

  useEffect(() => {
    //reset scrolling state
    setCurrentScrollTo(null);
  }, [currentScrollTo]);

  const handleScrollClick = (e) => {
    e.preventDefault();
    setCurrentScrollTo(e.toRef);
  };

  return (
    <>
      {/* <LeftNav /> */}
      <main ref={homeRef} className={`Home`}>
        <Landing />
        <Outlet />
      </main>
      {/* <RightNav /> */}
    </>
  );
};

export default Home;