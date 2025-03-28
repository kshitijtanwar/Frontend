import { useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";

const useIsAuthenticated = () => {
    const { isAuthenticated } = useSelector((state) => state.auth);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        if (!isAuthenticated) {
            const intendedPath = location.pathname;
            navigate("/", { state: { from: intendedPath }, replace: true });
        } else if (location.state?.from) {
            navigate(location.state.from, { replace: true });
        }
    }, [isAuthenticated, navigate, location]);
};

export default useIsAuthenticated;
