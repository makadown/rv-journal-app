import { createTheme } from '@mui/material/styles';
import { purple } from '@mui/material/colors';

// Create a theme instance.
export const purpleTheme = createTheme({
  palette: {
    primary: {
      main: '#262254',
    },
    secondary: {
      main: '#543884',
    },
    error: {
      main: purple.A400,
    },
  },
});

