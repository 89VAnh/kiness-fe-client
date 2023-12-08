import { AxiosRequestConfig } from "axios";
import { useQuery } from "react-query";

import { ExtractFnReturnType, QueryConfig } from "@/lib/react-query";
import { searchFaqs } from "@/services/faq.service";

export const CACHE_FAQ = {
  SEARCH: "FAQS",
  DETAIL: "FAQ_DETAIL",
};

// Search list
const useSearchFaqs = ({
  params,
  config,
}: {
  params: AxiosRequestConfig["params"];
  config?: QueryConfig<typeof searchFaqs>;
}) => {
  return useQuery<ExtractFnReturnType<typeof searchFaqs>>({
    ...config,
    queryKey: [CACHE_FAQ.SEARCH, params],
    queryFn: () => searchFaqs(params),
  });
};

export { useSearchFaqs };
