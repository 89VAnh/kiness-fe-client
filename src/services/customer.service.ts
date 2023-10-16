import { useMutation } from "react-query";

import { apiClient } from "@/lib/api";
import { MutationConfig } from "@/lib/react-query";

export const createCustomer = async (data: any): Promise<any> => {
  const res = await apiClient?.post(`customers/create`, data);

  return res.data;
};

type UseCreateCustomerOptions = {
  config?: MutationConfig<typeof createCustomer>;
};

export const useCreateCustomer = ({ config }: UseCreateCustomerOptions) => {
  return useMutation({
    onMutate: () => {},
    onError: () => {},
    onSuccess: () => {},
    ...config,
    mutationFn: createCustomer,
  });
};
