import { AxiosRequestConfig } from "axios";
import { useQuery } from "react-query";

import { ExtractFnReturnType, QueryConfig } from "@/lib/react-query";
import { searchVideos } from "@/services/video.service";

export const CACHE_VIDEO = {
  SEARCH: "VIDEOS",
};

// Search list
const useSearchVideos = ({
  params,
  config,
}: {
  params: AxiosRequestConfig["params"];
  config?: QueryConfig<typeof searchVideos>;
}) => {
  return useQuery<ExtractFnReturnType<typeof searchVideos>>({
    ...config,
    queryKey: [CACHE_VIDEO.SEARCH, params],
    queryFn: () => searchVideos(params),
  });
};
export { useSearchVideos };
