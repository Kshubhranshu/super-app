import axios from "axios";
const DEFAULT_LOCATION = "Bangalore";

export const getWeatherDetails = async () => {
    try {
        const reqUrl = `http://api.weatherapi.com/v1/current.json?key=987de39fe8924052ada80850232502&q=${DEFAULT_LOCATION}`;
        const response = await axios.get(reqUrl);
        return response.data;
    } catch (error) {
        console.log(error);
        // toast for error
        // alert("Something went wrong! Please try again after some time");
    }
};
