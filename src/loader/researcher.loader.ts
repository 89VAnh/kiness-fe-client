import { AxiosRequestConfig } from "axios";
import { useQuery } from "react-query";

import { ExtractFnReturnType, QueryConfig } from "@/lib/react-query";
import { searchResearchers } from "@/services/researcher.service";

export const CACHE_RESEARCHERS = {
  SEARCH: "RESEARCHERS",
  DETAIL: "RESEARCHER_DETAIL",
};

// Search list
const useSearchResearchers = ({
  params,
  config,
}: {
  params: AxiosRequestConfig["params"];
  config?: QueryConfig<typeof searchResearchers>;
}) => {
  return useQuery<ExtractFnReturnType<typeof searchResearchers>>({
    ...config,
    queryKey: [CACHE_RESEARCHERS.SEARCH, params],
    queryFn: () => searchResearchers(params),
  });
};

export { useSearchResearchers };
