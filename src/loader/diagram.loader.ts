import { AxiosRequestConfig } from "axios";
import { useQuery } from "react-query";

import { ExtractFnReturnType, QueryConfig } from "@/lib/react-query";
import { searchDiagrams } from "@/services/diagram.service";

export const CACHE_DIAGRAM = {
  SEARCH: "DIAGRAMS",
};

// Search list
const useSearchDiagrams = ({
  params,
  config,
}: {
  params: AxiosRequestConfig["params"];
  config?: QueryConfig<typeof searchDiagrams>;
}) => {
  return useQuery<ExtractFnReturnType<typeof searchDiagrams>>({
    ...config,
    queryKey: [CACHE_DIAGRAM.SEARCH, params],
    queryFn: () => searchDiagrams(params),
  });
};
export { useSearchDiagrams };
