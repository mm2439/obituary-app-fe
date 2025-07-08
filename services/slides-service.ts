import axios from "./axios";

const createSlide = async (formData: FormData) => {
  const endpoint = `/florist_slide/`;
  const response = await axios.post(endpoint, formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return response.data;
};

const slideService = {
  createSlide,
};

export default slideService;
