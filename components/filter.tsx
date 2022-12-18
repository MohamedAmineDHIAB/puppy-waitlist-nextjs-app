import * as React from "react";
import IconButton from "@mui/material/IconButton";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import Stack from "@mui/material/Stack";
import FilterAltRoundedIcon from "@mui/icons-material/FilterAltRounded";

type Props = {
    FilterValue: string;
    setFilterValue: (filter: string) => void;
};
export default function Filter({ FilterValue, setFilterValue }: Props) {
    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef<HTMLButtonElement>(null);
    const handleMenuItemClick = (value: string) => {
        setFilterValue(value);
        setOpen(false);
    };

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    function handleListKeyDown(event: React.KeyboardEvent) {
        if (event.key === "Tab") {
            event.preventDefault();
            setOpen(false);
        } else if (event.key === "Escape") {
            setOpen(false);
        }
    }
    // defining filter values and labels
    const filters = [
        { value: "all", label: "All" },
        { value: "serviced", label: "Serviced" },
        { value: "notServiced", label: "Not Serviced" },
    ];

    // check background color based on filter value
    const handleBackgroundColor = (value: string) => {
        if (FilterValue === value) {
            return { backgroundColor: "#f5f5f5" };
        }
    };

    return (
        <Stack direction="row" spacing={2}>
            <div>
                <IconButton
                    ref={anchorRef}
                    id="filter-button"
                    onClick={handleToggle}
                    sx={{ border: 2, borderColor: "secondary.main" }}
                >
                    <FilterAltRoundedIcon color="secondary" />
                </IconButton>
                <Popper
                    open={open}
                    anchorEl={anchorRef.current}
                    role={undefined}
                    placement="bottom-start"
                    transition
                    disablePortal
                >
                    {({ TransitionProps, placement }) => (
                        <Grow
                            {...TransitionProps}
                            style={{
                                transformOrigin:
                                    placement === "bottom-start"
                                        ? "left top"
                                        : "left bottom",
                            }}
                        >
                            <Paper>
                                <ClickAwayListener
                                    onClickAway={() => {
                                        setOpen(false);
                                    }}
                                >
                                    <MenuList
                                        autoFocusItem={open}
                                        id="filter-menu"
                                        aria-labelledby="filter-button"
                                        onKeyDown={handleListKeyDown}
                                    >
                                        {filters.map((filter) => (
                                            <MenuItem
                                                key={filter.value}
                                                onClick={() => {
                                                    handleMenuItemClick(
                                                        filter.value
                                                    );
                                                }}
                                                sx={{
                                                    backgroundColor:
                                                        handleBackgroundColor(
                                                            filter.value
                                                        ),
                                                }}
                                            >
                                                {filter.label}
                                            </MenuItem>
                                        ))}
                                    </MenuList>
                                </ClickAwayListener>
                            </Paper>
                        </Grow>
                    )}
                </Popper>
            </div>
        </Stack>
    );
}
