import { ThemeOptions } from '@mui/material/styles';
import {amber} from "@mui/material/colors";

const lightThemeOptions: ThemeOptions = {
  palette: {
    mode: 'light',
    primary: {
      // light: will be calculated from palette.primary.main,
      main: '#1e80ff',
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    background: {
      default: '#f4f5f5',
      paper: '#ffffff'
    },
    text: {
      primary: "#1d2129",
      secondary: "#4e5969",
      disabled: "#71777c",
    },

    contrastThreshold: 3,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: 0.2,
  },
  typography: {
    fontFamily: [
      '-apple-system',
      'system-ui',
      '"Segoe UI"',
      'Roboto',
      '"Ubuntu"',
      '"Cantarell"',
      '"Noto-Sans"',
      'sans-serif',
      '"Helvetica Neue"',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
      '"PingFang SC"',
      '"Hiragino Sans GB"',
      '"Microsoft YaHei"',
      'Arial',
    ].join(','),
  },
};

export default lightThemeOptions;