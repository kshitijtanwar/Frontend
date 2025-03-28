import { Pagination as MUIPagination } from "@mui/material";
import { useSearchParams } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import { darkTheme } from "../constants/muiTheme";

const Pagination = ({ totalPages }) => {
    let [searchParams, setSearchParams] = useSearchParams();
    const page = Number(searchParams.get("page")) || 1;

    const handlePageChange = (event, value) => {
        const params = { page: value };
        setSearchParams(params);
    };

    return (
        <div className="flex justify-center items-center mt-10">
            <ThemeProvider theme={darkTheme}>
                <MUIPagination
                    count={totalPages}
                    page={page}
                    variant="outlined"
                    shape="rounded"
                    color="primary"
                    onChange={handlePageChange}
                />
            </ThemeProvider>
        </div>
    );
};

export default Pagination;
