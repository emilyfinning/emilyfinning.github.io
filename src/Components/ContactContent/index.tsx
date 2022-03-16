import React, { useState } from "react";
import { Box, Typography, TextField, Button, FormControl } from "@mui/material";
import validator from "validator";
import emailjs from "@emailjs/browser";
import "./styles.css";
import _ from "lodash";

const ContactContent: React.FC = () => {
  const [message, setMessage] = useState<{
    [key: string]: string;
  }>({
    name: "",
    email: "",
    message: "",
  });

  const [emailError, setEmailError] = useState(false);
  const [attemptedSubmit, setAttemptedSubmit] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newMessage = _.cloneDeep(message);
    newMessage[e.target.id] = e.target.value;
    setMessage(newMessage);
    if (e.target.id === "email") {
      setEmailError(!validator.isEmail(e.target.value));
    }
  };

  const sendMessage = () => {
    setAttemptedSubmit(true);
    if (
      message.name !== "" &&
      message.email !== "" &&
      message.message !== "" &&
      !emailError
    ) {
      emailjs
        .sendForm(
          process.env.REACT_APP_EMAILJS_SERVICE_ID!,
          process.env.REACT_APP_EMAILJS_TEMPLATE!,
          "#messageForm",
          process.env.REACT_APP_EMAILJS_ACCESS_KEY
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
  };

  return (
    <Box className="contact-container">
      <Typography variant="h2" className="contact-title">
        CONTACT ME
      </Typography>
      <Box className="dec-line-contact" />
      <Box className="field-container">
        <FormControl id="messageForm" component="form">
          <TextField
            variant="standard"
            label="Name"
            id="name"
            name="name"
            fullWidth
            sx={{ backgroundColor: "white", marginTop: "10px" }}
            onChange={handleChange}
            error={attemptedSubmit && message.name === ""}
          />
          <TextField
            variant="standard"
            label="Email"
            id="email"
            name="email"
            fullWidth
            sx={{ backgroundColor: "white", marginTop: "10px" }}
            onChange={handleChange}
            error={attemptedSubmit && (message.email === "" || emailError)}
          />
          <TextField
            variant="standard"
            label="Message"
            id="message"
            name="message"
            fullWidth
            sx={{ backgroundColor: "white", marginTop: "10px" }}
            multiline
            minRows={6}
            onChange={handleChange}
            error={attemptedSubmit && message.message === ""}
          />
        </FormControl>

        <Button
          variant="contained"
          sx={{ marginTop: "10px" }}
          onClick={sendMessage}
        >
          Submit
        </Button>
      </Box>
    </Box>
  );
};

export default ContactContent;
