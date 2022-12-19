// a component that contains the row which is used to add a new entry to the table
import { useState } from "react";
import { Button, TextField } from "@mui/material";
import { StyledTableCell, StyledTableRow } from "../styles/muiStyles";
import Checkbox from "@mui/material/Checkbox";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import RadioButtonUncheckedOutlinedIcon from "@mui/icons-material/RadioButtonUncheckedOutlined";
import dayjs, { Dayjs } from "dayjs";
import { v4 as uuidv4 } from "uuid";
import DateTimePicker from "./dateTimePicker";
import ControlPointOutlinedIcon from "@mui/icons-material/ControlPointOutlined";
type props = {
    handlePost: (newEntry: any) => void;
};
const InputRow = ({ handlePost }: props) => {
    const [puppyName, setPuppyName] = useState<string>("");
    const [owner, setOwner] = useState<string>("");
    const [requestedService, setRequestedService] = useState<string>("");
    const [serviced, setServiced] = useState<boolean>(false);
    const [arrival, setArrival] = useState<Dayjs | null>(dayjs(new Date()));

    const handleAdd = () => {
        // define new ID for new entry using uuid
        const newID = uuidv4();
        // define new entry
        const newEntry = {
            id: newID,
            puppyName: puppyName,
            owner: owner,
            requestedService: requestedService,
            serviced: serviced,
            arrival: arrival?.format("YYYY-MM-DDTHH:mm:ssZ"),
        };
        // call handlePost function to add new entry to table
        handlePost(newEntry);
    };
    return (
        <StyledTableRow>
            <StyledTableCell component="th" scope="row">
                <TextField
                    id="puppyName"
                    label="Puppy Name"
                    variant="standard"
                    onChange={(event) => {
                        setPuppyName(event.target.value);
                    }}
                />
            </StyledTableCell>
            <StyledTableCell>
                <TextField
                    id="owner"
                    label="Owner"
                    variant="standard"
                    onChange={(event) => {
                        setOwner(event.target.value);
                    }}
                />
            </StyledTableCell>
            <StyledTableCell>
                <TextField
                    id="requestedService"
                    label="Requested Service"
                    variant="standard"
                    onChange={(event) => {
                        setRequestedService(event.target.value);
                    }}
                />
            </StyledTableCell>
            <StyledTableCell align="center">
                <Checkbox
                    id="requestedService"
                    checked={serviced}
                    icon={<RadioButtonUncheckedOutlinedIcon />}
                    checkedIcon={<CheckCircleIcon />}
                    onChange={(event) => {
                        setServiced(event.target.checked);
                    }}
                />
            </StyledTableCell>
            <StyledTableCell>
                <DateTimePicker value={arrival} handleChange={setArrival} />
            </StyledTableCell>
            <StyledTableCell align="center">
                <Button variant="contained" color="primary" onClick={handleAdd}>
                    Add <ControlPointOutlinedIcon />
                </Button>
            </StyledTableCell>
            <StyledTableCell></StyledTableCell>
        </StyledTableRow>
    );
};

export default InputRow;
