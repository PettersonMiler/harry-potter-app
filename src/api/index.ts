import axios from "axios";

const CONFIG = {
  baseURL: "https://hp-api.onrender.com/api",
};

export const instance = axios.create(CONFIG);
