import { Stack, Card, Paper } from "@mui/material";

export default function CardCounter(props: any) {
  return (
    <Card
      sx={{ fontWeight: "bold", flexGrow: "1", minWidth: "5em", ...props?.sx }}
    >
      <Stack spacing={1}>
        <div>{props?.label}</div>
        <Paper elevation={0} sx={{ fontSize: "2rem" }}>
          {props?.value}
        </Paper>
      </Stack>
    </Card>
  );
}
