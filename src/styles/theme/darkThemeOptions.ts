import { ThemeOptions } from "@mui/material/styles";
import { deepOrange } from "@mui/material/colors";

import Logo from "../../../public/juejin_logo_dark.svg";

const darkThemeOptions: ThemeOptions = {
  palette: {
    mode: "dark",
    primary: {
      // light: will be calculated from palette.primary.main,
      light: "#007fff",
      main: "#1e80ff",
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    background: {
      default: "#0e0e0e",
      paper: "#121212",
    },
    text: {
      primary: "#ffffff",
      secondary: "rgba(255, 255, 255, 0.7)",
      disabled: "rgba(255, 255, 255, 0.5)",
    },
    divider: "#181818",
    contrastThreshold: 3,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: 0.2,
  },
  typography: {
    fontFamily: [
      "-apple-system",
      "system-ui",
      '"Segoe UI"',
      "Roboto",
      '"Ubuntu"',
      '"Cantarell"',
      '"Noto-Sans"',
      "sans-serif",
      '"Helvetica Neue"',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
      '"PingFang SC"',
      '"Hiragino Sans GB"',
      '"Microsoft YaHei"',
      "Arial",
    ].join(","),
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 350,
      md: 768,
      lg: 992,
      xl: 1536,
    },
  },
};

export default darkThemeOptions;
