import axios from "./axios";

const createCompany = async (formData: FormData, type: String) => {
  const endpoint = `/company/${type}`;
  const response = await axios.post(endpoint, formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return response.data;
};

const getFuneralCompany = async (queryParams?: {
  id?: string;
  userId?: string;
}) => {
  const endpoint = `/company/funeral`;
  const response = await axios.get(endpoint, { params: queryParams });
  return response.data;
};

const getCompleteCompany = async (queryParams?: { type?: string }) => {
  const endpoint = `/company/details`;
  const response = await axios.get(endpoint, { params: queryParams });
  return response.data;
};

const getFloristCompany = async (queryParams?: {
  id?: string;
  userId?: string;
}) => {
  const endpoint = `/company/florist`;
  const response = await axios.get(endpoint, { params: queryParams });
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
  getFuneralCompany,
  updateCompany,
  getFloristCompany,
  getCompleteCompany,
};

export default companyService;
