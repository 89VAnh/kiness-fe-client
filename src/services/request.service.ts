import { AxiosRequestConfig } from "axios";

import { apiClient } from "@/lib/api";
import { IRequest } from "@/models/request";

const prefix = "request";

export const searchRequests = async (
  params: AxiosRequestConfig["params"],
): Promise<any> => {
  const res = await apiClient?.post(`${prefix}/search-client`, params);

  return res.data;
};

export const getRequestDetail = async (
  params: AxiosRequestConfig["params"],
): Promise<any> => {
  const res = await apiClient?.post(`${prefix}/get-client-read-detail`, params);

  return res.data;
};

export const createRequest = async (data: IRequest): Promise<any> => {
  const res = await apiClient?.post(`${prefix}/create`, data);

  return res.data;
};
