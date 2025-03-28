import Login from "./pages/Login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Users from "./pages/Users";
import { Toaster } from "react-hot-toast";
import ScrollToTop from "./utils/ScrollToTop";
import Navbar from "./components/Navbar/Navbar";
import { useSelector } from "react-redux";
import Footer from "./components/Footer/Footer";

const App = () => {
    const { isAuthenticated } = useSelector((state) => state.auth);
    return (
        <Router>
            <Toaster />
            <ScrollToTop />
            {isAuthenticated && <Navbar />}
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/users" element={<Users />} />
            </Routes>
            <Footer />
        </Router>
    );
};
export default App;
