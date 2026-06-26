import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:3000/api",
});

export const reviewCode = async (code, language) => {
  const response = await API.post("/review", { code, language });
  return response.data;
};

export default API;
