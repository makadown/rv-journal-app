import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// Create a theme instance.
export const redTheme = createTheme({
  palette: {
    primary: {
      main: '#ba000d',
    },
    secondary: {
      main: '#f44336',
    },
    error: {
      main: red.A400,
    },
  },
});

