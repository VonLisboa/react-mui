import Navbar from "../components/Navbar";

import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#ffffff',
      dark: '#002884',
      contrastText: '#000',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
});

export default function DefaultLayout(props:any) {
  return (
    <ThemeProvider theme={theme}>
        <Navbar />
        {props.children}
    </ThemeProvider>
  );
}
