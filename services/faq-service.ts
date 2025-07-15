import axios from "./axios";

const createFaq = async (data: any) => {
  const endpoint = `/faq`;
  const response = await axios.post(endpoint, data, {
    headers: { "Content-Type": "application/json" },
  });
  return response.data;
};

const faqService = {
  createFaq,
};

export default faqService;
