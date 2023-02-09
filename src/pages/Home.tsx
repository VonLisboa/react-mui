import { Box } from "@mui/material";
import CardCounter from "../components/CardCounter";
import Ttable from "../components/Ttable";

const fields = [
  { label: "-", value: "hora" },
  { label: "Doca 1", value: "calories" },
  { label: "Doca 2", value: "fat" },
  { label: "Doca 3", value: "carbs" },
];

const rows = [
  {
    hora: {
      value: "08:00-09:00",
    },
    calories: { value: 4567, color: "yellow" },
    fat: { value: 787, color: "red" },
    carbs: { value: 22 },
  },
  {
    hora: {
      value: "08:00-09:00",
    },
    calories: { value: 2356, color: "red" },
    fat: { value: 544, color: "green" },
  },
  {
    hora: {
      value: "08:00-09:00",
      color: "red",
    },
    calories: { value: 797 },
    fat: { value: 887 },
    carbs: { value: 76 },
  },
];

export default function Home() {
  return (
    <div>
      <Box sx={{ display: "flex", my: "1em", px: "1em", gap: 2 }}>
        <CardCounter sx={{ padding: "1em" }} label="Total" value="7" />
        <CardCounter sx={{ padding: "1em" }} label="Pendente" value="7" />
        <CardCounter
          sx={{ padding: "1em" }}
          label="Veículs Presentes"
          value="0"
        />
        <CardCounter sx={{ padding: "1em" }} label="Em descarga" value="0" />
        <CardCounter sx={{ padding: "1em" }} label="Concluídos" value="0" />
        <CardCounter sx={{ padding: "1em" }} label="Não realizadas" value="0" />
      </Box>
      <Box sx={{ maxWidth: "45%", px: "1em", gap: 2 }}>
        <Ttable rows={rows} fields={fields} />
      </Box>
    </div>
  );
}
