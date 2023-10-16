import { AxiosRequestConfig } from "axios";
import { useQuery } from "react-query";

import { ExtractFnReturnType, QueryConfig } from "@/lib/react-query";
import { getBranchesDropdown } from "@/services/branch.service";

export const CACHE_BRANCH = {
  DROPDOWN_BRANCH: "DROPDOWN_BRANCH",
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

export { useBranchDropdown };
