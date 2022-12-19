import React from "react";
import { DateTimePicker as DateTimePickerMUI } from "@mui/x-date-pickers/DateTimePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import TextField from "@mui/material/TextField";
import { Stack } from "@mui/system";
import { Dayjs } from "dayjs";
type DateProps = {
    value: Dayjs | null;
    handleChange: (newValue: Dayjs | null) => void;
};
const DateTimePicker = ({ value, handleChange }: DateProps) => {
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Stack sx={{ width: 170 }}>
                <DateTimePickerMUI
                    label="Arrival"
                    inputFormat="YYYY-MM-DD HH:mm"
                    value={value}
                    onChange={handleChange}
                    renderInput={(params) => (
                        <TextField variant="standard" {...params} />
                    )}
                />
            </Stack>
        </LocalizationProvider>
    );
};

export default DateTimePicker;
