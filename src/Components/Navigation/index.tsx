import React from "react";
import { Box, Typography } from "@mui/material";
import { Link, animateScroll as scroll } from "react-scroll";
import "./styles.css";

const Navigation: React.FC = () => {
  return (
    <Box className="nav-box">
      <Box className="nav-links">
        <Link to="about-section" smooth="true" offset={-70}>
          <Box className="nav-link nav-link-1">
            <Box className="pusher" />
            <Typography variant="subtitle1" className="link-text">
              ABOUT ME
            </Typography>
          </Box>
        </Link>

        <Link to="project-section" smooth="true" offset={-70}>
          <Box className="nav-link nav-link-2">
            <Box className="pusher" />
            <Typography variant="subtitle1" className="link-text">
              PROJECTS
            </Typography>
          </Box>
        </Link>

        <Box className="nav-link nav-link-3">
          <Box className="pusher" />
          <Typography variant="subtitle1" className="link-text">
            CONTACT
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Navigation;
