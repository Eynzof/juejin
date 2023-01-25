import { ThemeOptions } from '@mui/material/styles';
import {deepOrange} from "@mui/material/colors";

const darkThemeOptions: ThemeOptions = {
  palette: {
    mode: 'dark',
    primary: {
      // light: will be calculated from palette.primary.main,
      main: '#000000',
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
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

export default darkThemeOptions;