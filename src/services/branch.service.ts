import { AxiosRequestConfig } from "axios";

import { apiClient } from "@/lib/api";

const prefix = "branches";

export const getBranchesDropdown = async (
  params: AxiosRequestConfig["params"],
): Promise<any> => {
  const res = await apiClient?.get(`${prefix}/dropdown`, params);

  return res.data;
};
