import "./table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(id, product, customer, date, amount, method, status) {
  return { id, product, customer, date, amount, method, status };
}

const rows = [
  createData(1, "Acer Nitro", "Deelaka", "2023/10/12", 123, "VISA", "Approved"),
  createData(2, "Acer Nitro", "Deelaka", "2023/10/12", 123, "VISA", "Pending"),
  createData(3, "Acer Nitro", "Deelaka", "2023/10/12", 123, "VISA", "Pending"),
  createData(4, "Acer Nitro", "Deelaka", "2023/10/12", 123, "VISA", "Pending"),
  createData(5, "Acer Nitro", "Deelaka", "2023/10/12", 123, "VISA", "Approved"),
  createData(6, "Acer Nitro", "Deelaka", "2023/10/12", 123, "VISA", "Pending"),
];

export default function BasicTable() {
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell" align="center">
              Tracking ID
            </TableCell>
            <TableCell className="tableCell" align="center">
              Product
            </TableCell>
            <TableCell className="tableCell" align="center">
              Customer
            </TableCell>
            <TableCell className="tableCell" align="center">
              Date
            </TableCell>
            <TableCell className="tableCell" align="center">
              Amount
            </TableCell>
            <TableCell className="tableCell" align="center">
              Payment method
            </TableCell>
            <TableCell className="tableCell" align="center">
              Status
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="tableCell">{row.id}</TableCell>
              <TableCell className="tableCell">{row.product}</TableCell>
              <TableCell className="tableCell">{row.customer}</TableCell>
              <TableCell className="tableCell">{row.date}</TableCell>
              <TableCell className="tableCell">{row.amount}</TableCell>
              <TableCell className="tableCell">{row.method}</TableCell>
              <TableCell className="tableCell">
                <span className={'status ${row.status}'}>{row.status}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
