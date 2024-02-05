import Profile from "../../assets/images/profileSmall.png";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getMoviesList } from "../../apis/movies";

const Movies = () => {
    const navigate = useNavigate();
    const [moviesList, setMoviesList] = useState({});
    const [movies, setMovies] = useState([]);
    const [genre, setGenre] = useState([]);

    function handleNavigate() {
        navigate("/");
    }

    useEffect(() => {
        const genre = localStorage.getItem("genre");
        // const genre = JSON.parse(localStorage.getItem("genre"));
        const filteredGenre = genre.split(",");
        setGenre(filteredGenre);

        filteredGenre.forEach((element) => {
            setMoviesList((prev) => ({
                ...prev,
                [element]: [],
            }));
        });

        for (let key in moviesList) {
            fetchMoviesListByTitle(filteredGenre[key]);
        }

        fetchMoviesListByTitle(filteredGenre[0]);
        fetchMoviesListByTitle(filteredGenre[1]);
        fetchMoviesListByTitle(filteredGenre[2]);
    }, []);

    useEffect(() => {
        console.log(moviesList);
    }, [moviesList]);

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
                {Object.entries(moviesList).map(([key]) => (
                    <div>
                        <span style={{ color: "white" }}>{key}</span>
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
                ))}
            </div>
        </>
    );
};

export default Movies;
