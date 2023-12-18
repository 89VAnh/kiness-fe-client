import { AxiosRequestConfig } from "axios";

import { apiClient } from "@/lib/api";

const prefix = "video";

export const searchVideos = async (
  params: AxiosRequestConfig["params"],
): Promise<any> => {
  const res = await apiClient?.post(`${prefix}/search`, params);

  return res.data;
};
