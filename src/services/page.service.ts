import { apiClient } from "@/lib/api";

const prefix = "pages";

export const getPageById = async (id: string | number): Promise<any> => {
  const res = await apiClient?.get(`${prefix}/get-by-id/${id}`);

  return res.data;
};
