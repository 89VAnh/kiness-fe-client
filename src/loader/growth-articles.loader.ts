import { AxiosRequestConfig } from "axios";
import { useMutation, useQuery } from "react-query";

import {
  ExtractFnReturnType,
  MutationConfig,
  QueryConfig,
} from "@/lib/react-query";
import {
  getDetailClientGrowthArticle,
  searchClientGrowthArticles,
  updateViewCountGrowthArticle,
} from "@/services/growth-articles.service";

export const CACHE_GROWTH_ARTICLE = {
  SEARCH: "GROWTH_ARTICLES",
  DETAIL: "GROWTH_ARTICLE_DETAIL",
};

const useSearchClientGrowthArticles = ({
  params,
  config,
}: {
  params: AxiosRequestConfig["params"];
  config?: QueryConfig<typeof searchClientGrowthArticles>;
}) => {
  return useQuery<ExtractFnReturnType<typeof searchClientGrowthArticles>>({
    ...config,
    queryKey: [CACHE_GROWTH_ARTICLE.SEARCH, params],
    queryFn: () => searchClientGrowthArticles(params),
  });
};

const useUpdateViewCountGrowthArticle = ({
  config,
}: {
  config?: MutationConfig<typeof updateViewCountGrowthArticle>;
}) => {
  return useMutation({
    onMutate: () => {},
    onError: () => {},
    onSuccess: () => {},
    ...config,
    mutationFn: updateViewCountGrowthArticle,
  });
};

const useGetDetailClientGrowthArticle = ({
  id,
  enabled = true,
  config,
}: {
  id: number;
  enabled?: boolean;
  config?: QueryConfig<typeof getDetailClientGrowthArticle>;
}) => {
  return useQuery<ExtractFnReturnType<typeof getDetailClientGrowthArticle>>({
    ...config,
    enabled,
    queryKey: [CACHE_GROWTH_ARTICLE.DETAIL, id],
    queryFn: () => getDetailClientGrowthArticle(id),
  });
};

export {
  useGetDetailClientGrowthArticle,
  useSearchClientGrowthArticles,
  useUpdateViewCountGrowthArticle,
};
