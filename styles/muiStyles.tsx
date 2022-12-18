import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { createTheme, styled } from "@mui/material/styles";

export const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.grey[300],
        color: theme.palette.grey[700],
        fontSize: 10,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 12,
    },
}));

export const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
        backgroundColor: theme.palette.action.hover,
    },
}));
export const theme = createTheme({
    typography: {
        fontFamily: "Martian Mono",
    },
    palette: {
        primary: {
            main: "#EE9E69",
            light: "#F4CEB5",
            dark: "#D67554",
        },
        secondary: {
            main: "#6251ED",
            light: "#8CB7FA",
            dark: "#793ED6",
        },
        error: {
            main: "#F07775",
        },
        success: {
            main: "#A3D9C5",
        },
    },
});
