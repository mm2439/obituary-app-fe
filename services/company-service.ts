import axios from "./axios";

const createCompany = async (formData: FormData, type: String) => {
  const endpoint = `/company/${type}`;
  const response = await axios.post(endpoint, formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return response.data;
};

const companyService = {
  createCompany,
};

export default companyService;
