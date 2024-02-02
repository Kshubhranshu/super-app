import Profile from "../../assets/images/profileSmall.png";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getMoviesList } from "../../apis/movies";

const Movies = () => {
    const navigate = useNavigate();
    const [movies, setMovies] = useState([]);

    function handleNavigate() {
        navigate("/");
    }

    useEffect(() => {
        fetchMoviesListByTitle("fiction");
        fetchMoviesListByTitle("horror");
        fetchMoviesListByTitle("kids");
    }, []);

    async function fetchMoviesListByTitle(title) {
        const result = await getMoviesList(title);
        const requiredResult = result.slice(0, 4);
        setMovies(requiredResult);
    }

    return (
        <>
            <div
                style={{
                    width: "100vw",
                    minHeight: "100vh",
                    background: "black",
                    overflowX: "hidden",
                    maxHeight: "100vh",
                }}
            >
                <div onClick={handleNavigate}>
                    <img
                        src={Profile}
                        style={{
                            position: "absolute",
                            top: "2vh",
                            right: "3vw",
                            height: "60px",
                            width: "60px",
                        }}
                        alt="movie cover"
                    />
                </div>
                <p
                    style={{
                        color: "green",
                        fontSize: "3rem",
                        margin: "1vw",
                    }}
                    // className={styles.header}
                >
                    Super app
                </p>
                <p style={{ color: "white", fontSize: "2rem", margin: "2vw" }}>
                    Entertainment according to your choice
                </p>

                <div
                    style={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: "10px",
                        justifyContent: "center",
                    }}
                >
                    {movies?.map((movie) => (
                        <div>
                            <div>
                                <img
                                    src={movie?.Poster}
                                    style={{
                                        objectFit: "contain",
                                        width: "15vw",
                                        height: "50%",
                                        borderRadius: "12px",
                                    }}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Movies;
