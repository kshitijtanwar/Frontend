import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const AuthProvider = ({ children }) => {
    const { isAuthenticated } = useSelector((state) => state.auth);
    const navigate = useNavigate();

    useEffect(() => {
        if (!isAuthenticated) {
            navigate("/");
        }
    }, [isAuthenticated, navigate]);

    return isAuthenticated ? children : null;
};

export default AuthProvider;
