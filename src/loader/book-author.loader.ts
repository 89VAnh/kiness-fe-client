import { useQuery } from "react-query";

import { ExtractFnReturnType, QueryConfig } from "@/lib/react-query";
import { getBookAuthorDropdown } from "@/services/book-author.service";

export const CACHE_BOOK_AUTHOR = {
  DROPDOWN: "BOOK_AUTHORS_DROPDOWN",
};

const useBookAuthorDropdown = ({
  config,
}: {
  config?: QueryConfig<typeof getBookAuthorDropdown>;
}) => {
  return useQuery<ExtractFnReturnType<typeof getBookAuthorDropdown>>({
    ...config,
    queryKey: [CACHE_BOOK_AUTHOR.DROPDOWN],
    queryFn: () => getBookAuthorDropdown(),
  });
};

export { useBookAuthorDropdown };
