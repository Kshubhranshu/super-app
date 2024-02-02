import { BrowserRouter, Route, Routes } from "react-router-dom";

import RegisterPage from "./component/Register/Register";
import Genre from "./pages/GenrePage/Genre";
import HomePage from "./pages/HomePage/HomePage";
import MoviePage from "./pages/MoviePage/MoviePage";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/genre" element={<Genre />} />
                <Route path="/" element={<HomePage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/movies" element={<MoviePage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
