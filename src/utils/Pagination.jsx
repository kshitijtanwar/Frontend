import { Pagination as MUIPagination } from "@mui/material";
import { useSearchParams } from "react-router-dom";

const Pagination = ({ itemsPerPage = 1, totalItems = 1 }) => {
    let [searchParams, setSearchParams] = useSearchParams();
    const page = Number(searchParams.get("page")) || 1;

    const handlePageChange = (event, value) => {
        const keyword = searchParams.get("keyword");
        const params = { page: value };

        if (keyword) {
            params.keyword = keyword;
        }

        setSearchParams(params);
    };

    return (
        <div className="flex justify-center items-center mt-10">
            <MUIPagination
                count={Math.ceil(totalItems / itemsPerPage)}
                page={page}
                variant="outlined"
                shape="rounded"
                color="primary"
                onChange={handlePageChange}
            />
        </div>
    );
};

export default Pagination;
