import { Box, AppBar, Toolbar, Typography, IconButton } from "@mui/material";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        color="primary"
        sx={{ borderTop: "3px solid #2b4ee9" }}
      >
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Painel de Recebimento / Local: Centro de distribuição / Dia:
            22/10/2023
          </Typography>
        </Toolbar>
        <IconButton color="primary">
          <FormatListBulletedIcon fontSize="large" />
        </IconButton>
      </AppBar>
    </Box>
  );
}
