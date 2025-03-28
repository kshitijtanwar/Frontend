import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const useIsAuthenticated = () => {
    const { isAuthenticated } = useSelector((state) => state.auth);
    const navigate = useNavigate();
    useEffect(() => {
        if (!isAuthenticated) {
            navigate("/");
        } else {
            navigate("/users");
        }
    }, [isAuthenticated, navigate]);
};
export default useIsAuthenticated;
