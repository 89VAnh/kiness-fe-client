import { AxiosRequestConfig } from "axios";
import { useQuery } from "react-query";

import { ExtractFnReturnType, QueryConfig } from "@/lib/react-query";
import {
  getResearchArticleById,
  searchResearchArticle,
} from "@/services/research-article.service";

export const CACHE_RESEARCH_ARTICLE = {
  SEARCH: "RESEARCH_ARTICLES",
  DETAIL: "RESEARCH_ARTICLE_DETAIL",
};

const useGetResearchArticleById = ({
  id,
  config,
}: {
  id: number;
  config?: QueryConfig<typeof getResearchArticleById>;
}) => {
  return useQuery<ExtractFnReturnType<typeof getResearchArticleById>>({
    ...config,
    queryKey: [CACHE_RESEARCH_ARTICLE.DETAIL, id],
    queryFn: () => getResearchArticleById(id),
  });
};

const useSearchResearchArticle = ({
  params,
  config,
}: {
  params: AxiosRequestConfig["params"];
  config?: QueryConfig<typeof searchResearchArticle>;
}) => {
  return useQuery<ExtractFnReturnType<typeof searchResearchArticle>>({
    ...config,
    queryKey: [CACHE_RESEARCH_ARTICLE.SEARCH, params],
    queryFn: () => searchResearchArticle(params),
  });
};

export { useGetResearchArticleById, useSearchResearchArticle };
