import { lazyLoad } from "@/utils/loadable";

export const HomePage = lazyLoad(
  () => import("./Intro"),
  (module) => module.default,
);
