import React from "react";
import { Box, Typography, TextField, Button } from "@mui/material";
import "./styles.css";

const ContactContent: React.FC = () => {
  return (
    <Box className="contact-container">
      <Typography variant="h2" className="contact-title">
        CONTACT ME
      </Typography>
      <Box className="dec-line-contact" />
      <Box className="field-container">
        <TextField
          variant="standard"
          label="Name"
          fullWidth
          sx={{ backgroundColor: "white", marginTop: "10px" }}
        />
        <TextField
          variant="standard"
          label="Email"
          fullWidth
          sx={{ backgroundColor: "white", marginTop: "10px" }}
        />
        <TextField
          variant="standard"
          label="Message"
          fullWidth
          sx={{ backgroundColor: "white", marginTop: "10px" }}
          multiline
          minRows={6}
        />

        <Button variant="contained" sx={{ marginTop: "10px" }}>
          Submit
        </Button>
      </Box>
    </Box>
  );
};

export default ContactContent;
