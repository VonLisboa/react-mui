import { Box, AppBar, Toolbar, Typography } from "@mui/material";

export default function Navbar() {
    return (
        <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="primary" sx={{borderTop: '3px solid #2b4ee9'}}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Painel de Recebimento / Local: Centro de distribuição / Dia: 22/10/2023
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
     );
  }
  
  