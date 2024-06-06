import { useLoadingStore } from "@/store/useLoadingStore";
import axios from "axios";
const { setLoading } = useLoadingStore.getState();
const url = process.env.API ?? "http://localhost:4000";

const api = axios.create({
  baseURL: url,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin":
      "http://localhost:4000 , http://localhost:3000 ,https://checkout.stripe.com",
  },
});

api.interceptors.request.use(
  (response) => {
    setLoading(true);
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => {
    setLoading(false);
    return response;
  },
  (error) => {
    setLoading(false);
    return Promise.reject(error);
  }
);

export default api;
