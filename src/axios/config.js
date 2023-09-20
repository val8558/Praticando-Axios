import axios from "axios";

const blogfetch = axios.create({
    baseURL: "https://jsonplaceholder.org/",
    headers: {
        "Content-Type": "application/json"
    }
})

export default blogfetch