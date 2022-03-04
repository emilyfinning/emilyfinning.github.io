import React from "react";
import { Box } from "@mui/material";
import HeaderContent from "../../Components/HeaderContent";
import Navigation from "../../Components/Navigation";
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
      <Box className="about-box" id="about-section"></Box>
      <Box className="projects-box"></Box>
      <Box className="contact-box"></Box>
    </Box>
  );
};

export default HomePage;
