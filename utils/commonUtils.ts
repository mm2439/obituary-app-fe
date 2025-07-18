import API_BASE_URL from "@/config/apiConfig";

export const getRemoteUrl = (filePath: string) => {
  return `${API_BASE_URL}/${filePath}`;
};

export const getTemplateCardImages = (images?: string[]) => {
  if (!images?.length) return undefined;
  return images?.map((image) => getRemoteUrl(image));
};
