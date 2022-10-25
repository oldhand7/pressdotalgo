import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 400,
      sm: 660,
      md: 980,
      lg: 1300,
      xl: 1536,
    },
  },
});

export default theme;
