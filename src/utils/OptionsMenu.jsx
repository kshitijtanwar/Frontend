import { useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import EditIcon from "@mui/icons-material/Edit";
import { Delete } from "@mui/icons-material";
import { styled, alpha } from "@mui/material/styles";
import { BsThreeDotsVertical } from "react-icons/bs";
import { Menu } from "@mui/material";

const StyledMenu = styled((props) => (
    <Menu
        elevation={0}
        anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
        }}
        transformOrigin={{
            vertical: "top",
            horizontal: "right",
        }}
        {...props}
    />
))(({ theme }) => ({
    "& .MuiPaper-root": {
        borderRadius: 6,
        marginTop: theme.spacing(1),
        minWidth: 180,
        color: "rgb(55, 65, 81)",
        boxShadow:
            "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
        "& .MuiMenu-list": {
            padding: "4px 0",
        },
        "& .MuiMenuItem-root": {
            "& .MuiSvgIcon-root": {
                fontSize: 18,
                color: theme.palette.text.secondary,
                marginRight: theme.spacing(1.5),
            },
            "&:active": {
                backgroundColor: alpha(
                    theme.palette.primary.main,
                    theme.palette.action.selectedOpacity
                ),
            },
        },
        ...theme.applyStyles("dark", {
            color: theme.palette.grey[300],
        }),
    },
}));

export default function OptionsMenu({ setEditOpen, deleteUser, userId }) {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <BsThreeDotsVertical
                onClick={handleClick}
                className="cursor-pointer"
            />

            <StyledMenu
                id="demo-customized-menu"
                MenuListProps={{
                    "aria-labelledby": "demo-customized-button",
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
            >
                <MenuItem
                    onClick={() => {
                        setEditOpen(true);
                        handleClose();
                    }}
                    disableRipple
                >
                    <EditIcon />
                    Edit
                </MenuItem>
                <MenuItem
                    onClick={() => {
                        deleteUser(userId);
                        handleClose();
                    }}
                    disableRipple
                >
                    <Delete />
                    Delete
                </MenuItem>
            </StyledMenu>
        </div>
    );
}
