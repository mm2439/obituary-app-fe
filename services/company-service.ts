import axios from "./axios";

const createCompany = async (formData: FormData, type: String) => {
  const endpoint = `/company/${type}`;
  const response = await axios.post(endpoint, formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return response.data;
};

const getCompany = async () => {
  const endpoint = `/company`;
  const response = await axios.get(endpoint);
  return response.data;
};

const updateCompany = async (formData: FormData, id: String) => {
  const endpoint = `/company/${id}`;
  const response = await axios.patch(endpoint, formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return response.data;
};

const companyService = {
  createCompany,
  getCompany,
  updateCompany,
};

export default companyService;
