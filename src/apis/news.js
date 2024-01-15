import axios from "axios";

export const getNewsDetails = async () => {
    try {
        const reqUrl = `https://newsapi.org/v2/everything?q=Apple&apiKey=${process.env.REACT_APP_API_KEY}`;
        const response = await axios.get(reqUrl);
        return response.data.articles[1];
    } catch (error) {
        console.log(error);
        // toast for error
        // alert("Something went wrong! Please try again after some time");
    }
};
