import { apiClient } from "@/lib/api";

export const createCustomer = async (data: any): Promise<any> => {
  const res = await apiClient?.post(`customers/create`, data);

  return res.data;
};
