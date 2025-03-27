import Login from "./pages/Login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
            </Routes>
        </Router>
    );
};
export default App;
