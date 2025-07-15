import axios from "./axios";

const assignKeeper = async (data: any) => {
  try {
    const endpoint = `/keeper/`;
    const response = await axios.post(endpoint, data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    return response.data;
  } catch (error: any) {
    if (error.response) {
      console.error("API Error:", error.response.data);
      throw error.response;
    } else {
      console.error("Network error:", error);
      throw new Error("Network error or no response");
    }
  }
};

const keeperService = {
  assignKeeper,
};

export default keeperService;
