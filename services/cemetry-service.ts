import axios from "./axios";

const createCemetry = async (formData: FormData) => {
  const endpoint = `/cemetry/`;
  const response = await axios.post(endpoint, formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return response.data;
};

const cemetryService = {
  createCemetry,
};

export default cemetryService;
