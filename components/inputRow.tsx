// a component that contains the row which is used to add a new entry to the table
import { useState } from "react";
import { Button, TextField } from "@mui/material";
import { StyledTableCell, StyledTableRow } from "../styles/muiStyles";
import Checkbox from "@mui/material/Checkbox";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import RadioButtonUncheckedOutlinedIcon from "@mui/icons-material/RadioButtonUncheckedOutlined";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { v4 as uuidv4 } from "uuid";

type props = {
    handlePost: (newEntry: any) => void;
};
const InputRow = ({ handlePost }: props) => {
    const [puppyName, setPuppyName] = useState<string>("");
    const [owner, setOwner] = useState<string>("");
    const [requestedService, setRequestedService] = useState<string>("");
    const [serviced, setServiced] = useState<boolean>(false);
    const [arrival, setArrival] = useState<Date | null>(new Date());

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
            arrival: arrival,
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
                    variant="outlined"
                    onChange={(event) => {
                        setPuppyName(event.target.value);
                    }}
                />
            </StyledTableCell>
            <StyledTableCell>
                <TextField
                    id="owner"
                    label="Owner"
                    variant="outlined"
                    onChange={(event) => {
                        setOwner(event.target.value);
                    }}
                />
            </StyledTableCell>
            <StyledTableCell>
                <TextField
                    id="requestedService"
                    label="Requested Service"
                    variant="outlined"
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
                <DateTimePicker
                    label="Arrival"
                    value={arrival}
                    onChange={setArrival}
                    renderInput={(params) => <TextField {...params} />}
                />
            </StyledTableCell>
            <StyledTableCell>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={handlePost}
                >
                    Add
                </Button>
            </StyledTableCell>
            <StyledTableCell></StyledTableCell>
        </StyledTableRow>
    );
};

export default InputRow;
