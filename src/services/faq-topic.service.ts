import { apiClient } from "@/lib/api";

const prefix = "faq-topic";

export const getFaqTopicsDropdown = async (): Promise<any> => {
  const res = await apiClient?.get(`${prefix}/get-dropdown`);

  return res.data;
};
