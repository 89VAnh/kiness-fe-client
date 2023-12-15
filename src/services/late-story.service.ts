import { AxiosRequestConfig } from "axios";

import { apiClient } from "@/lib/api";

const prefix = "late-story";

export const searchLateStories = async (
  params: AxiosRequestConfig["params"],
): Promise<any> => {
  const res = await apiClient?.post(`${prefix}/search-client`, params);

  return res.data;
};

export const getLateStoryDetail = async (id: string): Promise<any> => {
  const res = await apiClient?.get(`${prefix}/get-detail-client/${id}`);

  return res.data;
};

export const updateViewLateStory = async (id: string): Promise<any> => {
  const res = await apiClient?.patch(`${prefix}/update-view-count/${id}`);

  return res.data;
};
