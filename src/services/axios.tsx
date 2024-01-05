import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

const token = AsyncStorage.getItem("token");

const api = axios.create({
  baseURL: "https://cut-back-end-21c4e0de690c.herokuapp.com",
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

export default api;
