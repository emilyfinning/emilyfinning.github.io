import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import "./styles.css";

const ProjectsContent: React.FC = () => {
  return (
    <Box className="projects-container">
      <Box className="projects-header">
        <Typography variant="h1" className="projects-title">
          PROJECTS
        </Typography>
        <Box className="projects-line-detail" />
      </Box>
    </Box>
  );
};

export default ProjectsContent;
