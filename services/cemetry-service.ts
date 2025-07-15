import axios from "./axios";

const createCemetry = async (formData: FormData) => {
  const endpoint = `/cemetry/`;
  const response = await axios.post(endpoint, formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return response.data;
};

const getCemeteries = async (queryParams?: {}) => {
  try {
    const endpoint = "/cemetry";
    console.log(endpoint, { params: queryParams });
    const response = await axios.get(endpoint, { params: queryParams });
    return response.data;
  } catch (error: unknown) {
    console.error("Error fetching obituaries:", error);
    throw new Error("Network error or no response");
  }
};

const cemetryService = {
  createCemetry,
  getCemeteries,
};

export default cemetryService;
