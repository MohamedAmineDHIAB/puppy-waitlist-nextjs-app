import MuiTable from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { StyledTableCell, StyledTableRow } from "../styles/muiStyles";
import styled from "styled-components";
import FakeData from "../data/fakeData";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import PendingActionsIcon from "@mui/icons-material/PendingActions";
const TableWrapper = styled.div`
    width: 90%;
    background-color: white;
    border-radius: 10px;
    overflow: hidden;
    box-sizing: border-box;
    padding: 20px 0;
    box-shadow: 0 5px 5px rgba(0, 0, 0, 0.1);
`;

type align = "inherit" | "left" | "center" | "right" | "justify";
const Columns = [
    { name: "Puppy Name", align: "left" },
    { name: "Owner", align: "left" },
    { name: "Requested Service", align: "left" },
    { name: "Serviced", align: "center" },
    { name: "Arrival", align: "left" },
];
const Table = () => {
    return (
        <TableWrapper>
            <MuiTable>
                <TableHead>
                    <TableRow>
                        {Columns.map((column, index) => {
                            return (
                                <StyledTableCell
                                    key={index}
                                    align={column.align as align}
                                >
                                    {column.name}
                                </StyledTableCell>
                            );
                        })}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {FakeData?.entries.map((item) => (
                        <StyledTableRow key={item.id}>
                            <StyledTableCell component="th" scope="row">
                                {item.puppyName}
                            </StyledTableCell>
                            <StyledTableCell>{item.owner}</StyledTableCell>
                            <StyledTableCell>
                                {item.requestedService}
                            </StyledTableCell>
                            <StyledTableCell align="center">
                                {item.serviced ? (
                                    <CheckCircleIcon color="success" />
                                ) : (
                                    <PendingActionsIcon color="error" />
                                )}
                            </StyledTableCell>
                            <StyledTableCell>{item.arrival}</StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </MuiTable>
        </TableWrapper>
    );
};

export default Table;
