import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    color: theme.palette.common.black,
    backgroundColor: theme.palette.common.white,
    fontWeight: "bold",
    border: "1px solid #000000",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    border: "1px solid #000000",
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({}));

const getColor = (color: string) => {
    switch (color) {
    case "yellow":
      return "#ffee00";
    case "green":
      return "#00ff15";
    case "red":
      return "#ff0000";
    default:
      return "";
  }
};

const extract = (from: any, selector: string): string => {
  return (
    selector
      .replace(/\[([^\[\]]*)\]/g, ".$1.")
      .split(".")
      .filter((t) => t !== "")
      .reduce((prev, cur) => prev && prev[cur], from) || ""
  );
};

export default function TTable(props: any) {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            {props?.fields.map((item: string) => (
              <StyledTableCell key={item} align="center">
                {item}
              </StyledTableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {props?.rows.map((row: any) => (
            <StyledTableRow key={row.name.value}>
              {props?.fields.map((item: string) => (
                <StyledTableCell
                  key={item}
                  align="center"
                  sx={{ backgroundColor: getColor(extract(row,  `${item}.color`)) }}
                >
                  {extract(row, `${item}.value`)}
                </StyledTableCell>
              ))}
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
