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

export const submitStep1Data = async (formData: FormData) => {
  try {
    const response = await axios.post("/company/florist/", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error submitting step 1 data:", error);
    throw error;
  }
};

export const submitStep3Data = async (formData: FormData) => {
  const response = await fetch("/company/florist/packages/", {
    method: "POST",
    body: formData,
  });

  if (!response.ok) {
    throw new Error("Failed to submit step 3 data");
  }

  return await response.json();
};

const companyService = {
  createCompany,
  getCompany,
  updateCompany,
  submitStep1Data,
  submitStep3Data,
};

export default companyService;
