import React from "react";
import { Box } from "@mui/material";
import HeaderContent from "../../Components/HeaderContent";
import Navigation from "../../Components/Navigation";
import AboutContent from "../../Components/AboutContent";
import ProjectsContent from "../../Components/ProjectsContent";
import "./styles.css";

const HomePage: React.FC = () => {
  return (
    <Box>
      <Box className="header-box">
        <Box className="dec-line-1" />
        <Box className="dec-line-2" />
        <HeaderContent />
        <Navigation />
      </Box>
      <img
        src={require("../../Images/code3.jpg")}
        alt="Some code"
        className="code-pic"
      />
      <img
        src={require("../../Images/leaf.jpg")}
        alt="Some leaves"
        className="leaf-pic"
      />
      <Box className="about-box" id="about-section">
        <AboutContent />
      </Box>
      <Box className="dec-box-1" />
      <Box className="dec-box-2" />
      <Box className="projects-box" id="project-section">
        <ProjectsContent />
      </Box>
      <Box className="contact-box"></Box>
    </Box>
  );
};

export default HomePage;
