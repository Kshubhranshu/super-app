import axios from "axios";

export const getNewsDetails = async () => {
    try {
        const reqUrl = `https://newsapi.org/v2/everything?q=India&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`;
        const response = await axios.get(reqUrl);
        return response.data;
    } catch (error) {
        console.log(error);
    }
};
