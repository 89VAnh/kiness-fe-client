import { lazyLoad } from "@/utils/loadable";

export const IntroPage = lazyLoad(
  () => import("./Intro"),
  (module) => module.default,
);
