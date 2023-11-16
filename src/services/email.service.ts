import { apiClient } from "@/lib/api";

const prefix = "email";

export const sendVerifyAccount = async (data: any): Promise<any> => {
  const res = await apiClient?.post(`${prefix}/verify-account`, data);

  return res.data;
};
