import axios from "./axios";

const registerUser = async (userData: {
  email: string;
  password: string;
  role: string;
  company?: string;
  region?: string;
  city?: string;
}) => {
  try {
    const endpoint = "/user";

    const response = await axios.post(endpoint, userData);
    return response.data;
  } catch (error: unknown) {
    return error;
  }
};

const getMyUser = async () => {
  try {
    const endpoint = "/user/me";

    const response = await axios.get(endpoint);
    return response.data;
  } catch (error: unknown) {
    return new Error("Network error or no response");
  }
};

const updateMyUser = async (userData: {
  name?: string;
  email?: string;
  company?: string;
  region?: string;
  city?: string;
}) => {
  try {
    const endpoint = "/user/me";

    const response = await axios.patch(endpoint, userData);
    return response.data;
  } catch (error: unknown) {
    return new Error("Network error or no response");
  }
};

const deleteMyUser = async () => {
  try {
    const endpoint = "/user/me";

    const response = await axios.delete(endpoint);
    return response.data;
  } catch (error: unknown) {
    return new Error("Network error or no response");
  }
};

const userService = {
  registerUser,
  getMyUser,
  updateMyUser,
  deleteMyUser,
};

export default userService;
