import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  ButtonGroup,
} from "@mui/material";

import DateRangeIcon from "@mui/icons-material/DateRange";
import StoreIcon from "@mui/icons-material/Store";
import SettingsIcon from "@mui/icons-material/Settings";
import TButtonGroup from "./TButtonGroup";

declare module "@mui/material/IconButton" {
  interface IconButtonPropsColorOverrides {
    blue: true;
    black: true;
  }
}

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        color="primary"
        sx={{ borderTop: "3px solid #2b4ee9" }}
      >
        <Toolbar sx={{gap: 2}}>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Painel de Recebimento / Local: Centro de distribuição / Dia:
            22/10/2023
          </Typography>

          <TButtonGroup />

          <IconButton color="black">
            <DateRangeIcon fontSize="medium" />
          </IconButton>
          <IconButton color="black">
            <StoreIcon fontSize="medium" />
          </IconButton>

          <IconButton color="blue" size="small" disableRipple>
            <SettingsIcon fontSize="medium" />
            Configurações
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
