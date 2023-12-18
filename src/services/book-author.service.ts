import { apiClient } from "@/lib/api";

const prefix = "book-author";

export const getBookAuthorDropdown = async (): Promise<any> => {
  const res = await apiClient?.get(`${prefix}/get-dropdown`);

  return res.data;
};

export const getArticleAuthorById = async (id: number): Promise<any> => {
  const res = await apiClient?.get(`${prefix}/get-by-id/${id}`);

  return res.data;
};
