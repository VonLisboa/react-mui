import { CssBaseline } from "@mui/material";
import Navbar from "../components/Navbar";

import {
  createTheme,
  PaletteColorOptions,
  ThemeProvider,
} from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface CustomPalette {
    blue: PaletteColorOptions;
    black: PaletteColorOptions;
  }
  interface Palette extends CustomPalette {}
  interface PaletteOptions extends CustomPalette {}
}

const { palette } = createTheme();
const { augmentColor } = palette;
const createColor = (mainColor: any) =>
  augmentColor({ color: { main: mainColor } });

const theme = createTheme({
  palette: {
    background: {
      default: "#b1b1b1",
    },
    blue: createColor("#0bb2f4"),
    black: createColor("#000000"),
    primary: {
      light: "#002884",
      main: "#ffffff",
      dark: "#000000",
      contrastText: "#000",
    },
    secondary: {
      main: "#727272",
      dark: "#000",
      contrastText: "#000",
    },
  },
});

export default function DefaultLayout(props: any) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
      {props.children}
    </ThemeProvider>
  );
}
