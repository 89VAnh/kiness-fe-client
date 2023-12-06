import { AxiosRequestConfig } from "axios";
import { useQuery } from "react-query";

import { ExtractFnReturnType, QueryConfig } from "@/lib/react-query";
import {
  getBranchById,
  getBranchesDropdown,
  searchBranches,
} from "@/services/branch.service";

export const CACHE_BRANCH = {
  BRANCHES: "BRANCHES",
  DROPDOWN_BRANCH: "DROPDOWN_BRANCH",
};

const useSearchBranches = ({
  params,
  config,
}: {
  params: AxiosRequestConfig["params"];
  config?: QueryConfig<typeof searchBranches>;
}) => {
  return useQuery<ExtractFnReturnType<typeof searchBranches>>({
    ...config,
    queryKey: [CACHE_BRANCH.BRANCHES, params],
    queryFn: () => searchBranches({ params }),
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

const useGetBranchById = ({
  id,
  enabled,
  config,
}: {
  id: number;
  enabled: boolean;
  config?: QueryConfig<typeof getBranchById>;
}) => {
  return useQuery<ExtractFnReturnType<typeof getBranchById>>({
    ...config,
    enabled,
    queryKey: [CACHE_BRANCH.BRANCHES, id],
    queryFn: () => getBranchById(id),
  });
};

export { useBranchDropdown, useGetBranchById, useSearchBranches };
