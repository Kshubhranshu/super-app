import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegisterPage from "./component/Register/Register";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/register" element={<RegisterPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
