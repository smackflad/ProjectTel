import axios from "axios";

export const http = axios.create({
  baseURL: "http://localhost:4000/api/v1/",
  timeout: 1000,
});
