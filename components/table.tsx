import MuiTable from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { StyledTableCell, StyledTableRow } from "../styles/muiStyles";
import styled from "styled-components";
import Filter from "./filter";
import { useEffect, useState } from "react";
import DatePicker from "./datePicker";
import dayjs, { Dayjs } from "dayjs";
import Search from "./search";
import get from "../middleware/get";
import put from "../middleware/put";
import FakeData, { Columns, align } from "../data/fakeData";
import ServiceButton from "./serviceButton";
import ServiceIcon from "./serviceIcon";
import delete_ from "../middleware/delete";
import DeleteButton from "./deleteButton";
import post from "../middleware/post";
import InputRow from "./inputRow";
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

const Table = () => {
    const [DateValue, setDateValue] = useState<Dayjs | null>(null);
    const handleDateChange = (newValue: Dayjs | null) => {
        setDateValue(newValue);
    };
    const [FilterValue, setFilterValue] = useState<string>("all");
    const [SearchValue, setSearchValue] = useState<string>("");
    const [data, setData] = useState<any>(FakeData);
    const [shownData, setShownData] = useState<any>([]);
    const handleGet = (
        FilterValue: string,
        SearchValue: string,
        DateValue: Dayjs | null,
        Data: any[]
    ) => {
        const Res = get(FilterValue, SearchValue, DateValue, Data);
        setShownData([...Res]);
    };
    const handlePut = (item: any) => {
        const Res = put(item.id, item.arrival, !item.serviced, data);
        setData([...Res]);
    };
    const handleDelete = (item: any) => {
        const Res = delete_(item.id, item.arrival, data);
        setData([...Res]);
    };
    const handlePost = (item: any) => {
        const Res = post(item, data);
        setData([...Res]);
    };
    useEffect(() => {
        handleGet(FilterValue, SearchValue, DateValue, data);
    }, [FilterValue, SearchValue, DateValue, data]);
    if (!data) return <TableWrapper>Loading...</TableWrapper>;
    else {
        return (
            <TableWrapper>
                <TabelBar>
                    <Filter
                        FilterValue={FilterValue}
                        setFilterValue={setFilterValue}
                    />
                    <DatePicker
                        value={DateValue}
                        handleChange={handleDateChange}
                    />
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
                            {/* empty cells to match the header */}
                            <StyledTableCell></StyledTableCell>
                            <StyledTableCell></StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {shownData?.map((document: any) => {
                            return document.entries.map((item: any) => (
                                <StyledTableRow key={item.id}>
                                    <StyledTableCell component="th" scope="row">
                                        {item.puppyName}
                                    </StyledTableCell>
                                    <StyledTableCell>
                                        {item.owner}
                                    </StyledTableCell>
                                    <StyledTableCell>
                                        {item.requestedService}
                                    </StyledTableCell>
                                    <StyledTableCell align="center">
                                        <ServiceIcon serviced={item.serviced} />
                                    </StyledTableCell>
                                    <StyledTableCell>
                                        {dayjs(item.arrival).format(
                                            "YYYY-MM-DD"
                                        )}
                                    </StyledTableCell>
                                    <StyledTableCell align="center">
                                        <ServiceButton
                                            item={item}
                                            handlePut={handlePut}
                                        />
                                    </StyledTableCell>
                                    <StyledTableCell>
                                        <DeleteButton
                                            item={item}
                                            handleDelete={handleDelete}
                                        />
                                    </StyledTableCell>
                                </StyledTableRow>
                            ));
                        })}
                        <InputRow handlePost={handlePost} />
                    </TableBody>
                </MuiTable>
            </TableWrapper>
        );
    }
};

export default Table;
