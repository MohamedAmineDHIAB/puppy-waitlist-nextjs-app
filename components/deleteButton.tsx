import { IconButton } from "@mui/material";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
type props = {
    item: any;
    handleDelete: (item: any) => void;
};
const DeleteButton = ({ item, handleDelete }: props) => {
    return (
        <IconButton
            onClick={() => {
                handleDelete(item);
            }}
        >
            <DeleteForeverIcon color="error" />
        </IconButton>
    );
};

export default DeleteButton;
