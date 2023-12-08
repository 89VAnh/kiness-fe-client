import { useMutation } from "react-query";

import { MutationConfig } from "@/lib/react-query";
import { createExperienceRegister } from "@/services/experience-register.service";

export const CACHE_EXPERIENCE_REGISTER = {
  SEARCH: "EXPERIENCE_REGISTERS",
};

const useCreateExperienceRegister = ({
  config,
}: {
  config?: MutationConfig<typeof createExperienceRegister>;
}) => {
  return useMutation({
    onMutate: () => {},
    onError: () => {},
    onSuccess: () => {},
    ...config,
    mutationFn: createExperienceRegister,
  });
};

export { useCreateExperienceRegister };
