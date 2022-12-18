import React from "react";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import TextField from "@mui/material/TextField";
import { Stack } from "@mui/system";
import { Dayjs } from "dayjs";
type DateProps = {
    value: Dayjs | null;
    handleChange: (newValue: Dayjs | null) => void;
};
const DatePicker = ({ value, handleChange }: DateProps) => {
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Stack sx={{ width: 170 }}>
                <DesktopDatePicker
                    label="By Date"
                    inputFormat="DD/MM/YYYY"
                    value={value}
                    onChange={handleChange}
                    renderInput={(params) => (
                        <TextField {...params} color="secondary" />
                    )}
                />
            </Stack>
        </LocalizationProvider>
    );
};

export default DatePicker;
