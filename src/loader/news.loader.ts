import { AxiosRequestConfig } from "axios";
import { useQuery } from "react-query";

import { ExtractFnReturnType, QueryConfig } from "@/lib/react-query";
import { searchNews } from "@/services/news.service";

export const CACHE_NEWS = {
  NEWS: "NEWS",
};

const useSearchNews = ({
  params,
  config,
}: {
  params: AxiosRequestConfig["params"];
  config?: QueryConfig<typeof searchNews>;
}) => {
  return useQuery<ExtractFnReturnType<typeof searchNews>>({
    ...config,
    queryKey: [CACHE_NEWS.NEWS, params],
    queryFn: () => searchNews(params),
  });
};

export { useSearchNews };
