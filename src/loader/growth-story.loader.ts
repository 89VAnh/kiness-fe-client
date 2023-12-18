import { AxiosRequestConfig } from "axios";
import { useMutation, useQuery } from "react-query";

import {
  ExtractFnReturnType,
  MutationConfig,
  QueryConfig,
} from "@/lib/react-query";
import {
  getGrowthStoryDetail,
  searchGrowthStories,
  updateViewGrowthStory,
} from "@/services/growth-story.service";

export const CACHE_GROWTH_STORY = {
  SEARCH: "GROWTH_STORIES",
  DETAIL: "GROWTH_STORY",
};

// Search list
const useSearchGrowthStories = ({
  params,
  config,
}: {
  params: AxiosRequestConfig["params"];
  config?: QueryConfig<typeof searchGrowthStories>;
}) => {
  return useQuery<ExtractFnReturnType<typeof searchGrowthStories>>({
    ...config,
    queryKey: [CACHE_GROWTH_STORY.SEARCH, params],
    queryFn: () => searchGrowthStories(params),
  });
};

const useGetGrowthStoryDetail = ({
  id,
  config,
}: {
  id: string;
  config?: QueryConfig<typeof getGrowthStoryDetail>;
}) => {
  return useQuery<ExtractFnReturnType<typeof getGrowthStoryDetail>>({
    ...config,
    queryKey: [CACHE_GROWTH_STORY.DETAIL, id],
    queryFn: () => getGrowthStoryDetail(id),
  });
};

const useUpdateViewGrowthStory = ({
  config,
}: {
  config?: MutationConfig<typeof updateViewGrowthStory>;
}) => {
  return useMutation({
    onMutate: () => {},
    onError: () => {},
    onSuccess: () => {},
    ...config,
    mutationFn: updateViewGrowthStory,
  });
};

export {
  useSearchGrowthStories,
  useGetGrowthStoryDetail,
  useUpdateViewGrowthStory,
};
