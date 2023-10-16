import { apiClient } from "@/lib/api";

const prefix = "users";

interface Props {
  user_name: string;
  password: string;
}

export const loginService = async (data: Props): Promise<any> => {
  const res = await apiClient?.post(`${prefix}/login`, data);

  return res.data;
};

export const authorization = async (token: string): Promise<any> => {
  const res = await apiClient?.get(`${prefix}/authorize/${token}`);

  return res.data;
};
