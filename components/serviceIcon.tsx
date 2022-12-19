import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import PendingActionsIcon from "@mui/icons-material/PendingActions";
type props = {
    serviced: boolean;
};
const ServiceIcon = ({ serviced }: props) => {
    if (serviced) {
        return <CheckCircleIcon color="success" />;
    }
    return <PendingActionsIcon color="error" />;
};

export default ServiceIcon;
