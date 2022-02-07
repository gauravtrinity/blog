import axios from "axios";

const APIService = axios.create({
  baseURL:
    process.env.REACT_APP_SERVER_API || "https://jsonplaceholder.typicode.com",
  headers: { "Content-Type": "application/json" },
  timeout: 1000 * 2, // Wait for request to complete in 2 seconds
});

export default APIService;
