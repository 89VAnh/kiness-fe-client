import { apiClient } from "@/lib/api";

const prefix = "slides";

export const getSlides = async (data: any): Promise<any> => {
  const res = await apiClient?.post(`${prefix}/search`, data);

  return res.data;
};
