import React from "react";
import { Box, Typography, Grid, Container } from "@mui/material";
import "./styles.css";

const AboutContent: React.FC = () => {
  return (
    <Box className="about-container">
      <Typography variant="body2" className="desc-p1">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean non
        scelerisque lectus, at fringilla velit. Fusce bibendum posuere ligula
        sit amet posuere.
      </Typography>
      <Typography variant="body2" className="desc-p2">
        Etiam vel rutrum quam. Nulla faucibus pulvinar massa, eget blandit justo
        malesuada eget. Donec diam turpis, condimentum eu metus suscipit,
        egestas dictum eros.
      </Typography>
      <Box className="title-box">
        <Typography variant="h2" className="about-title">
          ABOUT
        </Typography>
        <Typography variant="h1" className="me-title">
          ME
        </Typography>
      </Box>
      <Box className="about-line-detail" />
      <Box className="skills-box">
        <img
          src={require("../../Images/Icons/idea.png")}
          className="skills-icon"
          alt="lightbulb icon"
        />
        <Typography variant="h3">SKILLS</Typography>
      </Box>
      <Box className="skill-container">
        <img
          src={require("../../Images/Icons/atom.png")}
          alt="React Icon"
          className="skill-icon"
        />
        <img
          src={require("../../Images/Icons/java-script.png")}
          alt="Javascript Icon"
          className="skill-icon"
        />
        <img
          src={require("../../Images/Icons/html.png")}
          alt="HTML Icon"
          className="skill-icon"
        />
        <img
          src={require("../../Images/Icons/files.png")}
          alt="CSS Icon"
          className="skill-icon"
        />
        <img
          src={require("../../Images/Icons/git.png")}
          alt="Git Icon"
          className="skill-icon"
        />
        <img
          src={require("../../Images/Icons/python.png")}
          alt="Python Icon"
          className="skill-icon"
        />
        <img
          src={require("../../Images/Icons/java.png")}
          alt="Java Icon"
          className="skill-icon"
        />
      </Box>
    </Box>
  );
};

export default AboutContent;
