import toast from "react-hot-toast";
import axios from "./axios";

const assignCard = async (data: any) => {
  const endpoint = `/card`;
  try {
    const response = await axios.post(endpoint, data, {
      headers: { "Content-Type": "application/json" },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

const cardService = {
  assignCard,
};

export default cardService;
