import { useMutation } from "react-query";

import { MutationConfig } from "@/lib/react-query";
import { createCustomer } from "@/services/customer.service";

const useCreateCustomer = ({
  config,
}: {
  config?: MutationConfig<typeof createCustomer>;
}) => {
  return useMutation({
    onMutate: () => {},
    onError: () => {},
    onSuccess: () => {},
    ...config,
    mutationFn: createCustomer,
  });
};

export { useCreateCustomer };
