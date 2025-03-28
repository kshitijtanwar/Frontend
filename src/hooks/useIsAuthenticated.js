import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const useIsAuthenticated = () => {
    const location = useLocation();
    const { isAuthenticated } = useSelector((state) => state.auth);
    const navigate = useNavigate();

    useEffect(() => {
        if (!isAuthenticated) {
            navigate("/");
        }
        if (location.pathname === "/" && isAuthenticated) {
            navigate("/users");
        }
    }, [isAuthenticated, navigate, location]);
};

export default useIsAuthenticated;
