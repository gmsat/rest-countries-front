import { createTheme } from "@mui/material";
import "@fontsource/catamaran";
import "@fontsource/roboto";
import "@fontsource/montserrat";

export const theme = createTheme({
  palette: {
    primary: {
      main: '#011f4b',
    },
    secondary: {
      main: '#b3cde0',
    },
    background: {
      default: '#03396c',
      paper: '#b3cde0',
    },
  },
  typography: {
    fontFamily: [
      "Catamaran",
      "sans-serif"
    ].join(',')
  }
});