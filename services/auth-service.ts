import axios from "./axios";

const login = async (credentials: { email: string; password: string }) => {
  try {
    const endpoint = "/auth/login";

    const response = await axios.post(endpoint, credentials, {
      withCredentials: true,
    });

    // Store tokens from response headers to localStorage
    const accessToken = response.headers["access-token"];
    const refreshToken = response.headers["refresh-token"];

    console.log("Login Response - Access Token Header:", accessToken ? "Found" : "Not found");
    console.log("Login Response - Refresh Token Header:", refreshToken ? "Found" : "Not found");

    if (accessToken) {
      localStorage.setItem("access-token", accessToken);
      console.log("Stored access token in localStorage");
    }
    if (refreshToken) {
      localStorage.setItem("refresh-token", refreshToken);
      console.log("Stored refresh token in localStorage");
    }

    return response.data;
  } catch (error: any) {
    if (error.response && error.response.data) {
      return { error: error.response.data.error };
    }
    console.log(error);
    return { error: "An unexpected error occurred" };
  }
};
//
const logout = async () => {
  const endpoint = "/auth/logout";

  const response = await axios.post(endpoint, {
    withCredentials: true,
  });

  return response.data;
};

const authService = {
  login,
  logout,
};

export default authService;
