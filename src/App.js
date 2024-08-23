import React from "react";
import "./index.css";
import Home from "./Header/Home";
import Project from "./Header/Project";
import About from "./Header/About";
import Contact from "./Header/Contact";

import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Project" element={<Project />} />
      <Route path="/About" element={<About />} />
      <Route path="/Contact" element={<Contact />} />
    </Routes>
  );
}

export default App;
