import { Box, Card } from "@mui/material";
import CardCounter from "../components/CardCounter";

export default function Home() {
  return (
      <Box sx={{ display: 'flex', padding: '1em', gap:2 }}>
         <CardCounter sx={{ padding: '1em'}} label="Total" value="7" />
         <CardCounter sx={{ padding: '1em'}} label="Pendente" value="7" />
         <CardCounter sx={{ padding: '1em'}} label="Veículs Presentes" value="0" />
         <CardCounter sx={{ padding: '1em'}} label="Em descarga" value="0" />
         <CardCounter sx={{ padding: '1em'}} label="Concluídos" value="0" />
         <CardCounter sx={{ padding: '1em'}} label="Não realizadas" value="0" />
      </Box>
   );
}

