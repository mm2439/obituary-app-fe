import API_BASE_URL from "@/config/apiConfig";

export const getRemoteUrl = (filePath: string) => {
  return `${API_BASE_URL}/${filePath}`;
};

export const getTemplateCardImages = (images?: string[]) => {
  if (!images?.length) return [];
  if (!Array.isArray(images)) return [];
  return images.map((image) => getRemoteUrl(image));
};
