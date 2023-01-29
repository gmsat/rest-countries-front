import { createTheme } from "@mui/material";
import "@fontsource/catamaran";
import "@fontsource/roboto";
import "@fontsource/montserrat";

// declare module '@mui/material/styles' {
//   interface Theme {
//     pallete: {
//       type: string;
//       primary: string;
//     }
//     status: {
//       danger: string;
//     };
//   }
//   // allow configuration using `createTheme`
//   interface ThemeOptions {
//     pallete?: {
//       type?: string;
//       primary?: string;
//     }
//     status?: {
//       danger?: string;
//     };
//   }
// }

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