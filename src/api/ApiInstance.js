import axios from "axios";

const api = axios.create({
  baseURL: "https://flat-clover-earthworm.glitch.me",
});

export default api;
