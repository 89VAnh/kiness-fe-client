import { AxiosRequestConfig } from "axios";
import { useMutation, useQuery } from "react-query";

import {
  ExtractFnReturnType,
  MutationConfig,
  QueryConfig,
} from "@/lib/react-query";
import {
  createExperienceRegister,
  createTestRegister,
  getBranches,
  getBranchesDropdown,
} from "@/services/branch.service";

export const CACHE_BRANCH = {
  BRANCHES: "BRANCHES",
  DROPDOWN_BRANCH: "DROPDOWN_BRANCH",
};

const useBranches = ({
  params,
  config,
}: {
  params: AxiosRequestConfig["params"];
  config?: QueryConfig<typeof getBranches>;
}) => {
  return useQuery<ExtractFnReturnType<typeof getBranches>>({
    ...config,
    queryKey: [CACHE_BRANCH.BRANCHES, params],
    queryFn: () => getBranches({ params }),
  });
};

const useBranchDropdown = ({
  params,
  config,
}: {
  params: AxiosRequestConfig["params"];
  config?: QueryConfig<typeof getBranchesDropdown>;
}) => {
  return useQuery<ExtractFnReturnType<typeof getBranchesDropdown>>({
    ...config,
    queryKey: [CACHE_BRANCH.DROPDOWN_BRANCH, params],
    queryFn: () => getBranchesDropdown({ params }),
  });
};

const useCreateTestRegister = ({
  config,
}: {
  config?: MutationConfig<typeof createTestRegister>;
}) => {
  return useMutation({
    onMutate: () => {},
    onError: () => {},
    onSuccess: () => {},
    ...config,
    mutationFn: createTestRegister,
  });
};

const useCreateExperienceRegister = ({
  config,
}: {
  config?: MutationConfig<typeof createExperienceRegister>;
}) => {
  return useMutation({
    onMutate: () => {},
    onError: () => {},
    onSuccess: () => {},
    ...config,
    mutationFn: createExperienceRegister,
  });
};

export {
  useBranchDropdown,
  useBranches,
  useCreateExperienceRegister,
  useCreateTestRegister,
};
