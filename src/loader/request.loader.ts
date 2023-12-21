import { AxiosRequestConfig } from "axios";
import { useMutation, useQuery } from "react-query";

import {
  ExtractFnReturnType,
  MutationConfig,
  QueryConfig,
} from "@/lib/react-query";
import {
  createRequest,
  getRequestDetail,
  searchRequests,
} from "@/services/request.service";

export const CACHE_REQUEST = {
  SEARCH: "REQUESTS",
  DETAIL: "REQUEST",
};

// Search list
const useSearchRequests = ({
  params,
  config,
}: {
  params: AxiosRequestConfig["params"];
  config?: QueryConfig<typeof searchRequests>;
}) => {
  return useQuery<ExtractFnReturnType<typeof searchRequests>>({
    ...config,
    queryKey: [CACHE_REQUEST.SEARCH, params],
    queryFn: () => searchRequests(params),
  });
};

// Post detail
const usePostRequestDetail = ({
  config,
}: {
  config?: MutationConfig<typeof getRequestDetail>;
}) => {
  return useMutation({
    onMutate: () => {},
    onError: () => {},
    onSuccess: () => {},
    ...config,
    mutationFn: getRequestDetail,
  });
};

// Get detail
const useGetRequestDetail = ({
  params,
  config,
}: {
  params: AxiosRequestConfig["params"];
  config?: QueryConfig<typeof getRequestDetail>;
}) => {
  return useQuery<ExtractFnReturnType<typeof getRequestDetail>>({
    ...config,
    queryKey: [CACHE_REQUEST.DETAIL, params],
    queryFn: () => getRequestDetail(params),
  });
};

// Create
const useCreateRequest = ({
  config,
}: {
  config?: MutationConfig<typeof createRequest>;
}) => {
  return useMutation({
    onMutate: () => {},
    onError: () => {},
    onSuccess: () => {},
    ...config,
    mutationFn: createRequest,
  });
};

export {
  useCreateRequest,
  useGetRequestDetail,
  usePostRequestDetail,
  useSearchRequests,
};
