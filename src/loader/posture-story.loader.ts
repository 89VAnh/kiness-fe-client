import { AxiosRequestConfig } from "axios";
import { useMutation, useQuery } from "react-query";

import {
  ExtractFnReturnType,
  MutationConfig,
  QueryConfig,
} from "@/lib/react-query";
import {
  getPostureStoryDetail,
  searchPostureStories,
  updateViewPostureStory,
} from "@/services/posture-story.service";

export const CACHE_POSTURE_STORY = {
  SEARCH: "POSTURE_STORIES",
  DETAIL: "POSTURE_STORY",
};

// Search list
const useSearchPostureStories = ({
  params,
  config,
}: {
  params: AxiosRequestConfig["params"];
  config?: QueryConfig<typeof searchPostureStories>;
}) => {
  return useQuery<ExtractFnReturnType<typeof searchPostureStories>>({
    ...config,
    queryKey: [CACHE_POSTURE_STORY.SEARCH, params],
    queryFn: () => searchPostureStories(params),
  });
};

const useGetPostureStoryDetail = ({
  id,
  config,
}: {
  id: string;
  config?: QueryConfig<typeof getPostureStoryDetail>;
}) => {
  return useQuery<ExtractFnReturnType<typeof getPostureStoryDetail>>({
    ...config,
    queryKey: [CACHE_POSTURE_STORY.DETAIL, id],
    queryFn: () => getPostureStoryDetail(id),
  });
};

const useUpdateViewPostureStory = ({
  config,
}: {
  config?: MutationConfig<typeof updateViewPostureStory>;
}) => {
  return useMutation({
    onMutate: () => {},
    onError: () => {},
    onSuccess: () => {},
    ...config,
    mutationFn: updateViewPostureStory,
  });
};

export {
  useSearchPostureStories,
  useGetPostureStoryDetail,
  useUpdateViewPostureStory,
};
