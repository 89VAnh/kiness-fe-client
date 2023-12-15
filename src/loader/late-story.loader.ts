import { AxiosRequestConfig } from "axios";
import { useMutation, useQuery } from "react-query";

import {
  ExtractFnReturnType,
  MutationConfig,
  QueryConfig,
} from "@/lib/react-query";
import {
  getLateStoryDetail,
  searchLateStories,
  updateViewLateStory,
} from "@/services/late-story.service";

export const CACHE_LATE_STORY = {
  SEARCH: "LATE_STORIES",
  DETAIL: "LATE_STORY",
};

// Search list
const useSearchLateStories = ({
  params,
  config,
}: {
  params: AxiosRequestConfig["params"];
  config?: QueryConfig<typeof searchLateStories>;
}) => {
  return useQuery<ExtractFnReturnType<typeof searchLateStories>>({
    ...config,
    queryKey: [CACHE_LATE_STORY.SEARCH, params],
    queryFn: () => searchLateStories(params),
  });
};

const useGetLateStoryDetail = ({
  id,
  config,
}: {
  id: string;
  config?: QueryConfig<typeof getLateStoryDetail>;
}) => {
  return useQuery<ExtractFnReturnType<typeof getLateStoryDetail>>({
    ...config,
    queryKey: [CACHE_LATE_STORY.DETAIL, id],
    queryFn: () => getLateStoryDetail(id),
  });
};

const useUpdateViewLateStory = ({
  config,
}: {
  config?: MutationConfig<typeof updateViewLateStory>;
}) => {
  return useMutation({
    onMutate: () => {},
    onError: () => {},
    onSuccess: () => {},
    ...config,
    mutationFn: updateViewLateStory,
  });
};

export { useSearchLateStories, useGetLateStoryDetail, useUpdateViewLateStory };
