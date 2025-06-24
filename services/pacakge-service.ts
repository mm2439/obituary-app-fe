import axios from "./axios";

const createPackage = async (formData: FormData) => {
  const endpoint = `/package/`;
  const response = await axios.post(endpoint, formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return response.data;
};
const getPackages = async (companyId: string) => {
  const endpoint = `/package`;
  const response = await axios.get(endpoint, {
    params: { companyId },
  });
  return response.data;
};

const packageService = {
  createPackage,
  getPackages,
};

export default packageService;
