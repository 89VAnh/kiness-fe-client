import { AxiosRequestConfig } from "axios";

import { apiClient } from "@/lib/api";

const prefix = "branches";

export const searchBranches = async (
  params: AxiosRequestConfig["params"],
): Promise<any> => {
  const res = await apiClient?.post(`${prefix}/search`, params);

  return res.data;
};

export const getBranchById = async (id: string | number): Promise<any> => {
  const res = await apiClient?.get(`${prefix}/get-by-id/${id}`);

  return res.data;
};

export const getBranchesDropdown = async (
  params: AxiosRequestConfig["params"],
): Promise<any> => {
  const res = await apiClient?.get(`${prefix}/dropdown`, { params });

  return res.data;
};
