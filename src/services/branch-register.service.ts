import { apiClient } from "@/lib/api";

const prefix = "branch-register";

export const createBranchRegister = async (data: any): Promise<any> => {
  const res = await apiClient?.post(`${prefix}/create`, data);

  return res.data;
};
