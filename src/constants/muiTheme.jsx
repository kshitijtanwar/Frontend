import { createTheme } from "@mui/material";

export const darkThemeModal = createTheme({
    palette: {
        mode: "dark",
        primary: {
            main: "#6366f1", // Indigo color
        },
        background: {
            paper: "#1e1e1e",
            default: "#121212",
        },
        text: {
            primary: "#ffffff", // White text
        },
    },
    components: {
        MuiTextField: {
            styleOverrides: {
                root: {
                    marginBottom: "16px",
                    "& label": {
                        color: "#a0a0a0", // Softer label color
                    },
                    "& label.Mui-focused": {
                        color: "#6366f1",
                    },
                    "& .MuiOutlinedInput-root": {
                        "& fieldset": {
                            borderColor: "transparent", // Remove border
                        },
                        "&:hover fieldset": {
                            borderColor: "transparent", // Remove hover border
                        },
                        "&.Mui-focused fieldset": {
                            borderColor: "transparent", // Remove focused border
                        },
                    },
                    "& .MuiOutlinedInput-input": {
                        color: "#ffffff", // White input text
                        backgroundColor: "#2a2a2a", // Slightly lighter background
                        borderRadius: "8px",
                    },
                },
            },
        },
    },
});

export const darkTheme = createTheme({
    palette: {
        mode: "dark",
        primary: {
            main: "#6366f1",
        },
        background: {
            paper: "#1e1e1e",
            default: "#121212",
        },
        text: {
            primary: "#ffffff",
            secondary: "#b0b0b0",
        },
    },
    components: {
        MuiPaginationItem: {
            styleOverrides: {
                root: {
                    "&.Mui-selected": {
                        backgroundColor: "#6366f1",
                        color: "#ffffff",
                        "&:hover": {
                            backgroundColor: "#4338ca",
                        },
                    },
                    "&:not(.Mui-selected)": {
                        color: "#b0b0b0",
                        borderColor: "rgba(255,255,255,0.23)",
                        "&:hover": {
                            backgroundColor: "rgba(255,255,255,0.08)",
                        },
                    },
                },
            },
        },
    },
});
