import { createTheme } from "@mui/material";

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
