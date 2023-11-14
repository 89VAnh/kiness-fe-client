import { apiClient } from "@/lib/api";

export const createCustomer = async (data: any): Promise<any> => {
  const res = await apiClient?.post(`customers/create`, data);

  return res.data;
};

export const getCustomerById = async (id: string): Promise<any> => {
  const res = await apiClient?.get(`customers/get-by-id/${id}`);

  return res.data;
};
