import { useMutation } from "react-query";

import { apiClient } from "@/lib/api";
import { MutationConfig } from "@/lib/react-query";

const prefix = "users";

interface Props {
  user_name: string;
  password: string;
}

type UseLoginOptions = {
  config?: MutationConfig<typeof loginService>;
};

export const loginService = async (data: Props): Promise<any> => {
  const res = await apiClient?.post(`${prefix}/login`, data);

  return res.data;
};

export const authorization = async (token: string): Promise<any> => {
  const res = await apiClient?.get(`${prefix}/authorize/${token}`);

  return res.data;
};

export const useLogin = ({ config }: UseLoginOptions) => {
  return useMutation({
    onMutate: () => {},
    onError: () => {},
    onSuccess: () => {},
    ...config,
    mutationFn: loginService,
  });
};
