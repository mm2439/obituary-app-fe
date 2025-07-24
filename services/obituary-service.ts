import axios from "./axios";

const createObituary = async (formData: FormData) => {
  const endpoint = "/obituary";
  const response = await axios.post(endpoint, formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return response.data;
};

const getObituaryById = async (slugKey: any) => {
  const response = await axios.get(`/obituary?slugKey=${slugKey}`);
  return response.data || null;
};

const getObituary = async (queryParams?: {
  city?: string;
  region?: string;
  id?: string;
  userId?: string;
  page?: number;
  date?: string;
  limit?: number;
  days?: number;
}) => {
  try {
    const endpoint = "/obituary";
    console.log(endpoint, { params: queryParams });
    const response = await axios.get(endpoint, { params: queryParams });
    return response.data;
  } catch (error: unknown) {
    console.error("Error fetching obituaries:", error);
    throw new Error("Network error or no response");
  }
};

//memory
const getMemory = async (queryParams?: { slugKey?: string }) => {
  try {
    const endpoint = "/obituary/memory";
    console.log(endpoint, { params: queryParams });
    const response = await axios.get(endpoint, { params: queryParams });
    console.log(response.data);
    return response.data;
  } catch (error: unknown) {
    console.error("Error fetching obituaries:", error);
    throw new Error("Network error or no response");
  }
};

const getFunerals = async (queryParams?: {
  city?: string;
  region?: string;
  id?: string;
  startDate?: string;
  endDate?: string;
}) => {
  try {
    const endpoint = "/obituary/funerals";
    console.log(endpoint, queryParams);
    const response = await axios.get(endpoint, { params: queryParams });
    return response.data;
  } catch (error: unknown) {
    console.error("Error fetching obituaries:", error);
    throw new Error("Network error or no response");
  }
};
const updateObituary = async (id: string, formData: FormData) => {
  try {
    const endpoint = `/obituary/${id}`;
    const response = await axios.patch(endpoint, formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    return response.data;
  } catch (error) {
    console.error("Error updating obituary:", error);
    throw error;
  }
};

const updateObituaryVisits = async (data: any) => {
  try {
    const endpoint = `/obituary/visits/${data.obituaryId}`;
    const response = await axios.patch(endpoint, data);
    return response.data;
  } catch (error: unknown) {
    console.error("Error updating obituary visits:", error);
    throw new Error("Network error or no response");
  }
};
//add sorrow book
const createSorrowBook = async (id: string, data: any) => {
  try {
    const endpoint = `/sorrow-book/${id}`;
    const response = await axios.post(endpoint, data);
    return response.data;
  } catch (error: any) {
    if (error.response) {
      console.error("API Error:", error.response.data);
      throw error.response;
    } else {
      console.error("Network error:", error);
      throw new Error("Network error or no response");
    }
  }
};

// add dedication
const createDedication = async (id: string, data: any) => {
  try {
    const endpoint = `/dedication/${id}`;
    const response = await axios.post(endpoint, data);
    return response.data;
  } catch (error: any) {
    if (error.response) {
      console.error("API Error:", error.response.data);
      throw error.response;
    } else {
      console.error("Network error:", error);
      throw new Error("Network error or no response");
    }
  }
};

//add photo
const addPhoto = async (id: string, formData: FormData) => {
  try {
    const endpoint = `/photo/${id}`;
    const response = await axios.post(endpoint, formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    return response.data;
  } catch (error: unknown) {
    console.error("Error updating obituary:", error);
    throw new Error("Network error or no response");
  }
};

// add condolence
const createCondolence = async (id: string, data: any) => {
  try {
    const endpoint = `/condolence/${id}`;
    const response = await axios.post(endpoint, data);
    return response.data;
  } catch (error: any) {
    if (error.response) {
      console.error("API Error:", error.response.data);
      throw error.response;
    } else {
      console.error("Network error:", error);
      throw new Error("Network error or no response");
    }
  }
};

// burn candle
const burnCandle = async (id: string, data: any) => {
  try {
    const endpoint = `/candle/${id}`;
    const response = await axios.post(endpoint, data);
    return response.data;
  } catch (error: any) {
    if (error.response) {
      console.error("API Error:", error.response.data);
      throw error.response;
    } else {
      console.error("Network error:", error);
      throw new Error("Network error or no response");
    }
  }
};
//fetch pending posts
const fetchPendingPosts = async () => {
  try {
    const endpoint = `/obituary/pending-data`;
    const response = await axios.get(endpoint);

    return response.data;
  } catch (error: any) {
    if (error.response) {
      console.error("API Error:", error.response.data);
      throw error.response;
    } else {
      console.error("Network error:", error);
      throw new Error("Network error or no response");
    }
  }
};
//change post status
const changePostStatus = async (data: any) => {
  try {
    const endpoint = `/post`;
    const response = await axios.post(endpoint, data);

    return response.data;
  } catch (error: any) {
    if (error.response) {
      console.error("API Error:", error.response.data);
      throw error.response;
    } else {
      console.error("Network error:", error);
      throw new Error("Network error or no response");
    }
  }
};

//add report
const addReport = async (id: string, data: any) => {
  try {
    const endpoint = `/report/${id}`;
    const response = await axios.post(endpoint, data);
    return response.data;
  } catch (error: unknown) {
    console.error("Error submitting report:", error);
    throw new Error("Network error or no response");
  }
};

//get memories
const getMemories = async () => {
  try {
    const endpoint = `/obituary/memories`;
    const response = await axios.get(endpoint);
    return response.data;
  } catch (error: unknown) {
    console.error("Error Getting Memories:", error);
    throw new Error("Network error or no response");
  }
};

const getKeeperMemories = async () => {
  try {
    const endpoint = `/obituary/keeper/memories`;
    const response = await axios.get(endpoint);
    return response.data;
  } catch (error: unknown) {
    console.error("Error Getting Memories:", error);
    throw new Error("Network error or no response");
  }
};

const getMemoryLogs = async (id: number) => {
  try {
    const endpoint = `/logs/${id}`;
    const response = await axios.get(endpoint);
    return response.data;
  } catch (error: unknown) {
    console.error("Error Getting Logs:", error);
    throw new Error("Network error or no response");
  }
};

const getLogs = async () => {
  try {
    const endpoint = `/obituary/logs/`;
    const response = await axios.get(endpoint);
    return response.data;
  } catch (error: unknown) {
    console.error("Error Getting Logs:", error);
    throw new Error("Network error or no response");
  }
};

const getGiftLogs = async () => {
  try {
    const endpoint = `/logs/gifts/logs`;
    const response = await axios.get(endpoint);
    return response.data;
  } catch (error: unknown) {
    console.error("Error Getting Logs:", error);
    throw new Error("Network error or no response");
  }
};

const getApprovedData = async () => {
  try {
    const endpoint = `/post/approved`;
    const response = await axios.get(endpoint);
    return response.data;
  } catch (error: unknown) {
    console.error("Error Getting Posts:", error);
    throw new Error("Network error or no response");
  }
};

const getAdminMemories = async () => {
  try {
    const endpoint = `/obituary/admin/memories`;
    const response = await axios.get(endpoint);
    return response.data;
  } catch (error: unknown) {
    console.error("Error Getting Posts:", error);
    throw new Error("Network error or no response");
  }
};

const getCompanyObituaries = async () => {
  try {
    const endpoint = `/obituary/company`;
    const response = await axios.get(endpoint);
    return response.data;
  } catch (error: unknown) {
    console.error("Error Getting Posts:", error);
    throw new Error("Network error or no response");
  }
};

const getMonthlyCompanyData = async () => {
  try {
    const endpoint = `/obituary/company/monthly`;
    const response = await axios.get(endpoint);
    return response.data;
  } catch (error: unknown) {
    console.error("Error Getting Posts:", error);
    throw new Error("Network error or no response");
  }
};

const getCompanyLogs = async () => {
  try {
    const endpoint = `/obituary/company/logs/`;
    const response = await axios.get(endpoint);
    return response.data;
  } catch (error: unknown) {
    console.error("Error Getting Logs:", error);
    throw new Error("Network error or no response");
  }
};
const getMemoryId = async (queryParams?: {
  city?: string;
  date?: string;
  type?: string;
}) => {
  try {
    const endpoint = `/obituary/id/`;
    const response = await axios.get(endpoint, { params: queryParams });
    return response.data;
  } catch (error: unknown) {
    console.error("Error Getting Logs:", error);
    throw error;
  }
};

const uploadObituaryTemplateCards = async (id: string, data: FormData) => {
  try {
    const endpoint = `/obituary/${id}/template-cards`;
    const response = await axios.patch(endpoint, data, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    return response.data;
  } catch (error: unknown) {
    console.error("Error Uploading Obituary Template Cards:", error);
    throw error;
  }
};

const obituaryService = {
  getObituaryById,
  createObituary,
  getGiftLogs,
  getObituary,
  getMemory,
  getFunerals,
  updateObituary,
  updateObituaryVisits,
  createSorrowBook,
  createDedication,
  addPhoto,
  createCondolence,
  burnCandle,
  fetchPendingPosts,
  changePostStatus,
  getMemoryId,
  addReport,
  getLogs,
  getMemories,
  getKeeperMemories,
  getMemoryLogs,
  getApprovedData,
  getAdminMemories,
  getCompanyObituaries,
  getMonthlyCompanyData,
  getCompanyLogs,
  uploadObituaryTemplateCards,
};

export default obituaryService;
