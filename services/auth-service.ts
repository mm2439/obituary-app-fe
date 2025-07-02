import axios from "./axios";

const login = async (credentials: { email: string; password: string }) => {
  try {
    const endpoint = "/auth/login";

    const response = await axios.post(endpoint, credentials, {
      withCredentials: true,
    });

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
