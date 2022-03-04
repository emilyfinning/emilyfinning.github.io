import React from "react";
import { Box, Typography, Grid, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import GitHubIcon from "@mui/icons-material/GitHub";
import NotesIcon from "@mui/icons-material/Notes";
import "./styles.css";

interface ProjectProps {
  id: string;
  title: string;
  desc: string;
  githubUrl: string;
}

const StyledButton = styled(Button)({
  borderRadius: "0",
  width: "49%",
  height: "50px",
  backgroundColor: "#415D43",
  "&:hover": {
    backgroundColor: "#111d13",
  },
});

const Project: React.FC<ProjectProps> = ({ id, title, desc, githubUrl }) => {
  return (
    <Grid item xs={4}>
      <Box className="project-box">
        <Box className="project-title-box">
          <Box className="cube" />
          <Typography variant="h4">{title.toUpperCase()}</Typography>
        </Box>
        <Typography variant="body2" className="description-text">
          {desc}
        </Typography>
      </Box>
      <Box className="button-box">
        <StyledButton
          variant="contained"
          startIcon={<GitHubIcon />}
          onClick={() => window.open(githubUrl)}
        >
          View on Github
        </StyledButton>
        <StyledButton variant="contained" startIcon={<NotesIcon />}>
          Dev Diary
        </StyledButton>
      </Box>
    </Grid>
  );
};

export default Project;
