import { apiClient } from "@/lib/api";

const prefix = "experience-register";

export const createExperienceRegister = async (data: any): Promise<any> => {
  const res = await apiClient?.post(`${prefix}/create`, data);

  return res.data;
};
