import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import "./styles.css";

const HeaderContent: React.FC = () => {
  return (
    <Box className="container">
      <img
        src={require("../../Images/profilepicsquare.jpg")}
        className="profile-pic-small"
        alt="Emily Finning"
      />
      <Box className="top-title-box">
        <Box className="line-detail" />
        <Typography variant="h1" sx={{ color: "#E7F7E9" }} className="emily">
          EMILY
        </Typography>
      </Box>
      <Grid container className="bottom-title-grid">
        <Grid item>
          <img
            src={require("../../Images/profilepiclight.jpg")}
            className="profile-pic"
            alt="Emily Finning"
          />
        </Grid>
        <Grid item className="name-desc">
          <Typography
            variant="h2"
            sx={{ color: "#E7F7E9" }}
            className="finning"
          >
            FINNING
          </Typography>
          <Box className="desc">
            <Typography variant="body1" className="desc-text">
              I am a front end developer specialising in React with industry
              experience in the security and defence sector. <br />
              <br />
              I'm passionate about delivering a smooth and enjoyable user
              experience.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default HeaderContent;
