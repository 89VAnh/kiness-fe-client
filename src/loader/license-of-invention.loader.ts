import { AxiosRequestConfig } from "axios";
import { useQuery } from "react-query";

import { ExtractFnReturnType, QueryConfig } from "@/lib/react-query";
import { searchLicenses } from "@/services/license-of-invention.service";

export const CACHE_LICENSE_OF_INVENTION = {
  SEARCH: "LICENSE_OF_INVENTIONS",
};

// Search list
const useSearchLicenses = ({
  params,
  config,
}: {
  params: AxiosRequestConfig["params"];
  config?: QueryConfig<typeof searchLicenses>;
}) => {
  return useQuery<ExtractFnReturnType<typeof searchLicenses>>({
    ...config,
    queryKey: [CACHE_LICENSE_OF_INVENTION.SEARCH, params],
    queryFn: () => searchLicenses(params),
  });
};

export { useSearchLicenses };
