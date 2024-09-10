import axios from "axios";

export const api = axios.create({
  baseURL: "https://flat-clover-earthworm.glitch.me",
});

export const authApi = axios.create({
  baseURL: "https://moneyfulpublicpolicy.co.kr",
});
