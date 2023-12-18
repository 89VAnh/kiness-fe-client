import { AxiosRequestConfig } from "axios";

import { apiClient } from "@/lib/api";

const prefix = "license-of-invention";

export const searchLicenses = async (
  params: AxiosRequestConfig["params"],
): Promise<any> => {
  const res = await apiClient?.post(`${prefix}/search`, params);

  return res.data;
};
