import React from "react";
import { Box, Typography } from "@mui/material";
import "./styles.css";

const Navigation: React.FC = () => {
  return (
    <Box className="nav-box">
      <Box className="nav-links">
        <Box className="nav-link nav-link-1">
          <Box className="pusher" />
          <Typography variant="subtitle1" className="link-text">
            ABOUT ME
          </Typography>
        </Box>

        <Box className="nav-link nav-link-2">
          <Box className="pusher" />
          <Typography variant="subtitle1" className="link-text">
            PROJECTS
          </Typography>
        </Box>

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
