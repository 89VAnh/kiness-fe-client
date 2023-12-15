import { AxiosRequestConfig } from "axios";

import { apiClient } from "@/lib/api";

const prefix = "research-article";

export const getResearchArticleById = async (id: number): Promise<any> => {
  const res = await apiClient?.get(`${prefix}/get-by-id/${id}`);

  return res.data;
};

export const searchResearchArticle = async (
  params: AxiosRequestConfig["params"],
): Promise<any> => {
  const res = await apiClient?.post(`${prefix}/search`, params);

  return res.data;
};
