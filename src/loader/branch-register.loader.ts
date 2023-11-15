import { useMutation } from "react-query";

import { MutationConfig } from "@/lib/react-query";
import { createBranchRegister } from "@/services/branch-register.service";

export const CACHE_BRANCH_REGISTER = {
  BRANCH_REGISTER: "BRANCH_REGISTER",
};

const useCreateBranchRegister = ({
  config,
}: {
  config?: MutationConfig<typeof createBranchRegister>;
}) => {
  return useMutation({
    onMutate: () => {},
    onError: () => {},
    onSuccess: () => {},
    ...config,
    mutationFn: createBranchRegister,
  });
};

export { useCreateBranchRegister };
