import ProfileCard from "../ProfileCard/ProfileCard";
import Notes from "../Notes/Notes";
import News from "../News/News";
import Weather from "../Weather/Weather";
import Timer from "../Timer/Timer";

import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();

    const navigateToMovies = () => {
        navigate("/movies");
    };

    return (
        <div
            style={{
                height: "100vh",
                width: "100vw",
                background: "black",
                paddingLeft: "3vw",
                paddingTop: "3vh",
                boxSizing: "border-box",
            }}
        >
            <div style={{ display: "flex", gap: "20px" }}>
                <div>
                    <ProfileCard />
                    <Weather />
                    <Timer />
                </div>
                <div>
                    <Notes />
                </div>
                <div>
                    <News />
                </div>
            </div>
            <button
                onClick={navigateToMovies}
                style={{
                    position: "absolute",
                    bottom: "2vh",
                    right: "3vw",
                    background: "green",
                    border: "none",
                    color: "white",
                    padding: "6px",
                    borderRadius: "12px",
                }}
            >
                Browse
            </button>
        </div>
    );
};

export default Home;
