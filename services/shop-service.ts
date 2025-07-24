import axios from "./axios";

const createShop = async (data: any) => {
  const endpoint = `/florist_shop/`;
  const response = await axios.post(endpoint, data, {
    headers: { "Content-Type": "application/json" },
  });
  return response.data;
};

const shopService = {
  createShop,
};

export default shopService;
