import { AxiosRequestConfig } from "axios";

import { apiClient } from "@/lib/api";

const prefix = "posture-story";

export const searchPostureStories = async (
  params: AxiosRequestConfig["params"],
): Promise<any> => {
  const res = await apiClient?.post(`${prefix}/search-client`, params);

  return res.data;
};

export const getPostureStoryDetail = async (id: string): Promise<any> => {
  const res = await apiClient?.get(`${prefix}/get-detail-client/${id}`);

  return res.data;
};

export const updateViewPostureStory = async (id: string): Promise<any> => {
  const res = await apiClient?.patch(`${prefix}/update-view-count/${id}`);

  return res.data;
};
