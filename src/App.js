import { BrowserRouter, Routes, Route } from "react-router-dom";

import RegisterPage from "./component/Register/Register";
import Genre from "./pages/GenrePage/Genre";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/genre" element={<Genre />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
