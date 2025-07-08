import axios from "axios";
import API_BASE_URL from "@/config/apiConfig";
import toast from "react-hot-toast";

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
});

axiosInstance.interceptors.request.use(
  (config) => {
    const accesstoken = localStorage.getItem("access-token");
    const refreshtoken = localStorage.getItem("refresh-token");

    if (accesstoken) {
      config.headers["access-token"] = accesstoken;
    }
    if (refreshtoken) {
      config.headers["refresh-token"] = refreshtoken;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    const newAccessToken = response.headers["access-token"];
    const newRefreshToken = response.headers["refresh-token"];

    if (newAccessToken) {
      localStorage.setItem("access-token", newAccessToken);
    }
    if (newRefreshToken) {
      localStorage.setItem("refresh-token", newRefreshToken);
    }

    return response;
  },
  (error) => {
    if (error.response.status === 401) {
      localStorage.removeItem("access-token");
      localStorage.removeItem("refresh-token");
      localStorage.removeItem("user");
      toast.error("Token Expired Please Relogin!");
      // if (window.location.pathname !== "/registrationpage") {
      //   window.location.href = "/registrationpage";
      // }
    } else if (error.response.status === 403) {
      if (window.location.pathname !== "/") {
        window.location.href = "/";
      }
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
