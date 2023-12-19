import { AxiosRequestConfig } from "axios";
import { useQuery } from "react-query";

import { ExtractFnReturnType, QueryConfig } from "@/lib/react-query";
import { searchHistories } from "@/services/history.service";

export const CACHE_HISTORY = {
  SEARCH: "HISTORYIES",
  DETAIL: "HISTORY",
};

// Search list
const useSearchHistories = ({
  params,
  config,
}: {
  params: AxiosRequestConfig["params"];
  config?: QueryConfig<typeof searchHistories>;
}) => {
  return useQuery<ExtractFnReturnType<typeof searchHistories>>({
    ...config,
    queryKey: [CACHE_HISTORY.SEARCH, params],
    queryFn: () => searchHistories(params),
  });
};

export { useSearchHistories };
