import { useQuery } from "react-query";

import { ExtractFnReturnType, QueryConfig } from "@/lib/react-query";
import { getSlides } from "@/services/slide.service";

export const CACHE_SLIDE = {
  SEARCH_CACHE: "SEARCH_CACHE",
};

const useGetSlides = ({
  data,
  config,
}: {
  data?: any;
  config?: QueryConfig<typeof getSlides>;
}) => {
  return useQuery<ExtractFnReturnType<typeof getSlides>>({
    ...config,
    queryKey: [CACHE_SLIDE.SEARCH_CACHE, data],
    queryFn: () => getSlides(data),
  });
};

export { useGetSlides };
