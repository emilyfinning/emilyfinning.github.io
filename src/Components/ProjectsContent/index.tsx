import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import Project from "./Project";
import "./styles.css";

const ProjectsContent: React.FC = () => {
  const content = [
    {
      id: "portfolio",
      title: "Project Portfolio",
      desc: "I wanted a creative way to display my personal projects, so I set about creating a portfolio in react that would tell the world a bit about me, my skills, and the projects that I've created.",
      githubUrl: "https://github.com/emilyfinning/emilyfinning.github.io",
    },
  ];

  return (
    <Box className="projects-container">
      <Box className="projects-header">
        <Typography variant="h1" className="projects-title">
          PROJECTS
        </Typography>
        <Box className="projects-line-detail" />
      </Box>
      <Box className="project-list-container">
        <Grid container spacing={4}>
          {content.map((project) => (
            <Project
              id={project.id}
              title={project.title}
              desc={project.desc}
              githubUrl={project.githubUrl}
            />
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default ProjectsContent;
