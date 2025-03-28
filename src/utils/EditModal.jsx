import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { ThemeProvider } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { darkThemeModal as darkTheme } from "../constants/muiTheme";

export default function EditModal({ open, setOpen, initialUser = {}, onSave }) {
    const [user, setUser] = useState({
        id: initialUser.id || null,
        first_name: initialUser.first_name || "",
        last_name: initialUser.last_name || "",
        email: initialUser.email || "",
    });

    const handleClose = () => setOpen(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave(user);
        handleClose();
    };

    return (
        <ThemeProvider theme={darkTheme}>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-edit-user-title"
                className="flex items-center justify-center p-4"
            >
                <Box
                    className="w-full max-w-md mx-auto bg-[#1e1e1e] rounded-lg shadow-xl p-6 overflow-y-auto max-h-[90vh]"
                    sx={{
                        outline: "none",
                        position: "relative",
                        "@media (max-width: 600px)": {
                            width: "90%",
                            margin: "0 auto",
                            maxWidth: "100%",
                        },
                    }}
                >
                    <Typography
                        id="modal-edit-user-title"
                        variant="h6"
                        component="h2"
                        className="mb-6 text-white text-center"
                    >
                        Edit User Details
                    </Typography>
                    <form onSubmit={handleSubmit}>
                        <TextField
                            fullWidth
                            name="first_name"
                            label="First Name"
                            variant="outlined"
                            value={user.first_name}
                            onChange={handleChange}
                            margin="normal"
                        />
                        <TextField
                            fullWidth
                            name="last_name"
                            label="Last Name"
                            variant="outlined"
                            value={user.last_name}
                            onChange={handleChange}
                            margin="normal"
                        />
                        <TextField
                            fullWidth
                            name="email"
                            label="Email"
                            type="email"
                            variant="outlined"
                            value={user.email}
                            onChange={handleChange}
                            margin="normal"
                        />
                        <Box className="flex flex-col sm:flex-row justify-between gap-4 items-center mt-6 space-y-4 sm:space-y-0 sm:space-x-4">
                            <Button
                                onClick={handleClose}
                                variant="outlined"
                                color="secondary"
                                fullWidth
                                className="sm:flex-1"
                            >
                                Cancel
                            </Button>
                            <Button
                                type="submit"
                                variant="contained"
                                color="primary"
                                fullWidth
                                className="sm:flex-1"
                            >
                                Save Changes
                            </Button>
                        </Box>
                    </form>
                </Box>
            </Modal>
        </ThemeProvider>
    );
}
