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

    console.log("Axios Request - Access Token:", accesstoken ? "Found" : "Not found");
    console.log("Axios Request - Refresh Token:", refreshtoken ? "Found" : "Not found");

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
      // Don't redirect for 403 errors - let the component handle the error message
      // This prevents automatic redirection for blocked users
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
