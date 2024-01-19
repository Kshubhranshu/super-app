import axios from "axios";

export const getMovies = async (title) => {
    try {
        const reqUrl = ` http://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIES_API_KEY}&s=${title}`;
        const response = await axios.get(reqUrl);
        return response.data;
    } catch (error) {
        console.log(error);
    }
};
