import axios from "./axios";

const createPackage = async (formData: FormData) => {
  const endpoint = `/package/`;
  const response = await axios.post(endpoint, formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return response.data;
};

const packageService = {
  createPackage,
};

export default packageService;
