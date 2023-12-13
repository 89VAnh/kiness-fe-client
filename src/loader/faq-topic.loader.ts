import { useQuery } from "react-query";

import { ExtractFnReturnType, QueryConfig } from "@/lib/react-query";
import { getFaqTopicsDropdown } from "@/services/faq-topic.service";

export const CACHE_FAQ_TOPIC = {
  DROPDOWN: "DROPDOWN",
};

const useFaqTopicDropdown = ({
  config,
}: {
  config?: QueryConfig<typeof getFaqTopicsDropdown>;
}) => {
  return useQuery<ExtractFnReturnType<typeof getFaqTopicsDropdown>>({
    ...config,
    queryKey: [CACHE_FAQ_TOPIC.DROPDOWN],
    queryFn: () => getFaqTopicsDropdown(),
  });
};

export { useFaqTopicDropdown };
