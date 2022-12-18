import MuiTable from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { StyledTableCell, StyledTableRow } from "../styles/muiStyles";
import styled from "styled-components";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import PendingActionsIcon from "@mui/icons-material/PendingActions";
import Filter from "./filter";
import { useEffect, useState } from "react";
import DatePicker from "./datePicker";
import dayjs, { Dayjs } from "dayjs";
import Search from "./search";
import { Button } from "@mui/material";
import get from "../middleware/get";
const TableWrapper = styled.div`
    width: 90%;
    background-color: white;
    border-radius: 10px;
    overflow: hidden;
    box-sizing: border-box;
    padding: 20px;
    box-shadow: 0 5px 5px rgba(0, 0, 0, 0.1);
`;
const TabelBar = styled.div`
    display: flex;
    justify-content: flex-start;
    gap: 20px;
    align-items: center;
    box-sizing: border-box;
    padding: 20px;
    position: relative;
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
    const [DateValue, setDateValue] = useState<Dayjs | null>(null);
    const handleDateChange = (newValue: Dayjs | null) => {
        setDateValue(newValue);
    };
    const [FilterValue, setFilterValue] = useState<string>("all");
    const [SearchValue, setSearchValue] = useState<string>("");
    const [data, setData] = useState<any>();
    useEffect(() => {
        const Res = get();
        setData(Res);
    }, []);

    return (
        <TableWrapper>
            <TabelBar>
                <Filter
                    FilterValue={FilterValue}
                    setFilterValue={setFilterValue}
                />
                <DatePicker value={DateValue} handleChange={handleDateChange} />
                <Search value={SearchValue} handleChange={setSearchValue} />
            </TabelBar>
            <MuiTable sx={{ borderRadius: "10px", overflow: "hidden" }}>
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
                        <StyledTableCell></StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data?.entries.map((item: any) => (
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
                            <StyledTableCell>
                                {dayjs(item.arrival).format("DD/MM/YYYY")}
                            </StyledTableCell>
                            <StyledTableCell>
                                <Button
                                    sx={{ fontSize: "0.7rem" }}
                                    variant="contained"
                                >
                                    Mark as Serviced
                                </Button>
                            </StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </MuiTable>
        </TableWrapper>
    );
};

export default Table;
