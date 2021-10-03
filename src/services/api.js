import axios from "axios";

const api = axios.create({
  baseURL: "https://teste-hype.herokuapp.com/api",
});

export default api;