import { AxiosRequestConfig } from "axios";

import { apiClient } from "@/lib/api";

const prefix = "cities";

export const getCitiesDropdown = async (): Promise<any> => {
  const res = await apiClient?.get(`${prefix}/dropdown`);

  return res.data;
};

export const searchCities = async (
  params: AxiosRequestConfig["params"],
): Promise<any> => {
  const res = await apiClient?.post(`${prefix}/search`, params);

  return res.data;
};
