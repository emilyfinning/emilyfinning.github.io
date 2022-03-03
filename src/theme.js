import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    h1: {
      fontFamily: ["Inter"].join(","),
      fontWeight: 500,
    },
    h2: {
      fontFamily: ["Inter"].join(","),
      fontWeight: 500,
      fontSize: "55pt",
    },
    body1: {
      fontFamily: ["Shippori Antique B1"].join(","),
      fontSize: "11pt",
    },
    subtitle1: {
      fontFamily: ["Inter"].join(","),
      fontWeight: 600,
      fontSize: "16pt",
    },
  },
});

export default theme;
