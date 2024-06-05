import { useLoadingStore } from "@/store/useLoadingStore";
import axios from "axios";
const { setLoading } = useLoadingStore.getState();
const url = "http://localhost:4000";

const api = axios.create({
  baseURL: url,
  headers: {
    "Content-Type": "application/json",
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