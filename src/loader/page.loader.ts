import { useQuery } from "react-query";

import { ExtractFnReturnType, QueryConfig } from "@/lib/react-query";
import { getPageById } from "@/services/page.service";

export const CACHE_PAGE = {
  PAGE_CACHE: "PAGE_CACHE",
};

const useGetPageById = ({
  id,
  config,
}: {
  id: string;
  config?: QueryConfig<typeof getPageById>;
}) => {
  return useQuery<ExtractFnReturnType<typeof getPageById>>({
    ...config,
    queryKey: [CACHE_PAGE.PAGE_CACHE, id],
    queryFn: () => getPageById(id),
  });
};

export { useGetPageById };
