import axios from "axios";

const api = axios.create({
  baseURL: "https://cut-back-end-21c4e0de690c.herokuapp.com",
});

export default api;
