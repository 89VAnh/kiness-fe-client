import { lazyLoad } from "@/utils/loadable";

export const TestRegisterPage = lazyLoad(
  () => import("./RegisterExperience"),
  (module) => module.default,
);
