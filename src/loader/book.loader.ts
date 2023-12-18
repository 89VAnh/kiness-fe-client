import { AxiosRequestConfig } from "axios";
import { useQuery } from "react-query";

import { ExtractFnReturnType, QueryConfig } from "@/lib/react-query";
import { searchBooks } from "@/services/book.service";

export const CACHE_BOOK = {
  SEARCH: "BOOKS",
};

// Search list
const useSearchBooks = ({
  params,
  config,
}: {
  params: AxiosRequestConfig["params"];
  config?: QueryConfig<typeof searchBooks>;
}) => {
  return useQuery<ExtractFnReturnType<typeof searchBooks>>({
    ...config,
    queryKey: [CACHE_BOOK.SEARCH, params],
    queryFn: () => searchBooks(params),
  });
};
export { useSearchBooks };
