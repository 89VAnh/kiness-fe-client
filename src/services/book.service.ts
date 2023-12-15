import { AxiosRequestConfig } from "axios";

import { apiClient } from "@/lib/api";

const prefix = "book";

export const searchBooks = async (
  params: AxiosRequestConfig["params"],
): Promise<any> => {
  const res = await apiClient?.post(`${prefix}/search`, params);

  return res.data;
};
