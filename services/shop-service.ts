import axios from "./axios";

const createShop = async (data: any) => {
  const endpoint = `/florist_shop/`;

  const response = await axios.post(endpoint, data, {
    headers: { "Content-Type": "application/json" },
  });
  return response.data;
};

const getFloristShops = async (queryParams?: {
  city?: string;
  companyId?: string;
  userId?: string;
}) => {
  const endpoint = `/florist_shop/`;

  // Build query string from parameters
  const searchParams = new URLSearchParams();

  if (queryParams?.city) {
    searchParams.append('city', queryParams.city);
  }

  if (queryParams?.companyId) {
    searchParams.append('companyId', queryParams.companyId);
  }

  if (queryParams?.userId) {
    searchParams.append('userId', queryParams.userId);
  }

  const queryString = searchParams.toString();
  const fullEndpoint = queryString ? `${endpoint}?${queryString}` : endpoint;

  const response = await axios.get(fullEndpoint, {
    headers: { "Content-Type": "application/json" },
  });
  return response.data;
};

const shopService = {
  createShop,
  getFloristShops,
};

export default shopService;
