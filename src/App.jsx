import Login from "./pages/Login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Users from "./pages/Users";
import { Toaster } from "react-hot-toast";
const App = () => {
    return (
        <Router>
            <Toaster />
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/users" element={<Users />} />
            </Routes>
        </Router>
    );
};
export default App;
