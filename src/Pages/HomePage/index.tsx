import React from "react";
import { Box } from "@mui/material";
import HeaderContent from "../../Components/HeaderContent";
import Navigation from "../../Components/Navigation";
import "./styles.css";

const HomePage: React.FC = () => {
  return (
    <Box>
      <Box className="header-box">
        <HeaderContent />
        <Navigation />
      </Box>
      <Box className="about-box"></Box>
    </Box>
  );
};

export default HomePage;
