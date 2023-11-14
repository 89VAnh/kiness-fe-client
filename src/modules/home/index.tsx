import { lazyLoad } from "@/utils/loadable";

export const HomePage = lazyLoad(
  () => import("./Home"),
  (module) => module.default,
);
