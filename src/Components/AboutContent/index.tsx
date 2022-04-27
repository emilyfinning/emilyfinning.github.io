import React from "react";
import { Box, Typography, Grid, Container } from "@mui/material";
import "./styles.css";

const AboutContent: React.FC = () => {
  return (
    <Box className="about-container">
      <Typography variant="body2" className="desc-p1">
        I'm a recent graduate of Warwick University currently working in
        Security to deliver high quality front-end applications to our
        customers.
      </Typography>
      <Typography variant="body2" className="desc-p2">
        I thrive in an agile environment and am always working towards team
        success in producing a great product, focusing on a clean and intuitive
        user experience that is pleasing, responsive and accessible for all.
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
