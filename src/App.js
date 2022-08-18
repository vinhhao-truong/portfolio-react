import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";

import "./App.scss";
import "antd/dist/antd.min.css";
import Error404 from "./components/pages/404";
import Home from "./components/pages/Home";
import About from "./components/pages/HomeComp/About";
import Contact from "./components/pages/HomeComp/Contact";
import Experiences from "./components/pages/HomeComp/Experiences";
import Projects from "./components/pages/HomeComp/Projects";
import MainContent from "./components/pages/MainContent";
import {
  ProjectDetail,
  ProjectsOutline,
} from "./components/pages/ProjectDetail";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="main-content" element={<MainContent />}>
          <Route path="*" element={<Navigate to="/" replace />} />
          <Route path="about" element={<About />} />
          <Route path="experiences" element={<Experiences />} />
          <Route path="projects" element={<Projects />} />
          <Route path="contact" element={<Contact />} />
        </Route>
        <Route path="main-content" element={<Navigate to="/" replace />} />
        <Route path="/project" element={<ProjectsOutline />}>
          <Route path="/project/:detail" element={<ProjectDetail />} />
        </Route>
        <Route path="*" element={<Error404 />} exact />
      </Routes>
    </div>
  );
}

export default App;
