import { Button } from "@mui/material";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import UndoRoundedIcon from "@mui/icons-material/UndoRounded";
type props = {
    item: any;
    handlePut: (item: any) => void;
};
const ServiceButton = ({ item, handlePut }: props) => {
    if (item.serviced) {
        return (
            <Button
                variant="contained"
                onClick={() => {
                    handlePut(item);
                }}
                color="info"
            >
                Reopen <UndoRoundedIcon />
            </Button>
        );
    }
    return (
        <Button
            sx={{
                fontSize: "0.7rem",
                gap: "5px",
            }}
            variant="contained"
            onClick={() => {
                handlePut(item);
            }}
            color="info"
        >
            Close <HighlightOffIcon />
        </Button>
    );
};

export default ServiceButton;
