import { AxiosRequestConfig } from "axios";
import { useQuery } from "react-query";

import { ExtractFnReturnType, QueryConfig } from "@/lib/react-query";
import { searchSlides } from "@/services/slide.service";

export const CACHE_SLIDES = {
  SEARCH: "SLIDES",
  DETAIL: "SLIDE_DETAIL",
};

// Search list
const useSearchSlides = ({
  params,
  config,
}: {
  params: AxiosRequestConfig["params"];
  config?: QueryConfig<typeof searchSlides>;
}) => {
  return useQuery<ExtractFnReturnType<typeof searchSlides>>({
    ...config,
    queryKey: [CACHE_SLIDES.SEARCH, params],
    queryFn: () => searchSlides(params),
  });
};

export { useSearchSlides };
