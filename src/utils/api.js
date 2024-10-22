import axios from "axios";

const BASE_URL = "https://youtube138.p.rapidapi.com";
const apiKey = process.env.REACT_APP_YOUTUBE_API_KEY;

if (!apiKey) {
    console.error("API Key is undefined. Please check your .env file.");
}

const options = {
    params: { hl: "en", gl: "US" },
    headers: {
        "X-RapidAPI-Key": apiKey,
        "X-RapidAPI-Host": "youtube138.p.rapidapi.com",
    },
};

export const fetchDataFromApi = async (url) => {
    try {
        console.log("Fetching data from:", `${BASE_URL}/${url}`);
        const { data } = await axios.get(`${BASE_URL}/${url}`, options);
        return data;
    } catch (error) {
        console.error("Error fetching data from API:", error);
        throw error; 
    }
};

console.log("API Key:", apiKey);