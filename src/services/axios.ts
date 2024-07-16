import axios from "axios";

export const api = axios.create({
  baseURL: process.env.BASE_URL,
  //   baseURL: "https://ph-b9-assignment-12-server.vercel.app",
});
