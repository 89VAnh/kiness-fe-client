import { AxiosRequestConfig } from "axios";

import { apiClient } from "@/lib/api";

const prefix = "growth-story";

export const searchGrowthStories = async (
  params: AxiosRequestConfig["params"],
): Promise<any> => {
  const res = await apiClient?.post(`${prefix}/search-client`, params);

  return res.data;
};

export const getGrowthStoryDetail = async (id: string): Promise<any> => {
  const res = await apiClient?.get(`${prefix}/get-detail-client/${id}`);

  return res.data;
};

export const updateViewGrowthStory = async (id: string): Promise<any> => {
  const res = await apiClient?.patch(`${prefix}/update-view-count/${id}`);

  return res.data;
};
