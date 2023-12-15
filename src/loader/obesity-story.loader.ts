import { AxiosRequestConfig } from "axios";
import { useMutation, useQuery } from "react-query";

import {
  ExtractFnReturnType,
  MutationConfig,
  QueryConfig,
} from "@/lib/react-query";
import {
  getObesityStoryDetail,
  searchObesityStories,
  updateViewObesityStory,
} from "@/services/obesity-story.service";

export const CACHE_OBESITY_STORY = {
  SEARCH: "OBESITY_STORIES",
  DETAIL: "OBESITY_STORY",
};

// Search list
const useSearchObesityStories = ({
  params,
  config,
}: {
  params: AxiosRequestConfig["params"];
  config?: QueryConfig<typeof searchObesityStories>;
}) => {
  return useQuery<ExtractFnReturnType<typeof searchObesityStories>>({
    ...config,
    queryKey: [CACHE_OBESITY_STORY.SEARCH, params],
    queryFn: () => searchObesityStories(params),
  });
};

const useGetObesityStoryDetail = ({
  id,
  config,
}: {
  id: string;
  config?: QueryConfig<typeof getObesityStoryDetail>;
}) => {
  return useQuery<ExtractFnReturnType<typeof getObesityStoryDetail>>({
    ...config,
    queryKey: [CACHE_OBESITY_STORY.DETAIL, id],
    queryFn: () => getObesityStoryDetail(id),
  });
};

const useUpdateViewObesityStory = ({
  config,
}: {
  config?: MutationConfig<typeof updateViewObesityStory>;
}) => {
  return useMutation({
    onMutate: () => {},
    onError: () => {},
    onSuccess: () => {},
    ...config,
    mutationFn: updateViewObesityStory,
  });
};

export {
  useSearchObesityStories,
  useGetObesityStoryDetail,
  useUpdateViewObesityStory,
};
