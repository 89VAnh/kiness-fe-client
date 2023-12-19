import { AxiosRequestConfig } from "axios";

import { apiClient } from "@/lib/api";

const prefix = "growth-article";

export const searchClientGrowthArticles = async (
  params: AxiosRequestConfig["params"],
): Promise<any> => {
  const res = await apiClient?.post(`${prefix}/search-client`, params);

  return res.data;
};

export const getDetailClientGrowthArticle = async (
  id: number,
): Promise<any> => {
  const res = await apiClient?.get(`${prefix}/get-detail-client/` + id);

  return res.data;
};

export const updateViewCountGrowthArticle = async (
  id: number,
): Promise<any> => {
  const res = await apiClient?.patch(`${prefix}/update-view-count/` + id);

  return res.data;
};
