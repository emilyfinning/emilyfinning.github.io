import React from "react";
import { Box, Link } from "@mui/material";
import HeaderContent from "../../Components/HeaderContent";
import Navigation from "../../Components/Navigation";
import AboutContent from "../../Components/AboutContent";
import ProjectsContent from "../../Components/ProjectsContent";
import "./styles.css";
import ContactContent from "../../Components/ContactContent";

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
      <Box className="contact-box" id="contact-section">
        <ContactContent />
      </Box>
      <Box className="footer-box">
        <Link
          href="https://www.flaticon.com/free-icons/"
          title="hello icons"
          sx={{ textDecoration: "none" }}
        >
          Icons provided by Flaticon
        </Link>
      </Box>
    </Box>
  );
};

export default HomePage;
