import { AxiosRequestConfig } from "axios";
import { useQuery } from "react-query";

import { ExtractFnReturnType, QueryConfig } from "@/lib/react-query";
import { getCitiesDropdown, searchCities } from "@/services/city.service";

export const CACHE_CITY = {
  DROPDOWN_CITY: "DROPDOWN_CITY",
  CITIES: "CITIES",
};

const useCityDropdown = ({
  config,
}: {
  config?: QueryConfig<typeof getCitiesDropdown>;
}) => {
  return useQuery<ExtractFnReturnType<typeof getCitiesDropdown>>({
    ...config,
    queryKey: [CACHE_CITY.DROPDOWN_CITY],
    queryFn: () => getCitiesDropdown(),
  });
};

const useSearchCities = ({
  params,
  config,
}: {
  params: AxiosRequestConfig["params"];
  config?: QueryConfig<typeof searchCities>;
}) => {
  return useQuery<ExtractFnReturnType<typeof searchCities>>({
    ...config,
    queryKey: [CACHE_CITY.CITIES, params],
    queryFn: () => searchCities({ params }),
  });
};

export { useCityDropdown, useSearchCities };
