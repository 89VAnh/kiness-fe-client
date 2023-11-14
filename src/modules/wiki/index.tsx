import { lazyLoad } from "@/utils/loadable";

export const WikiPage = lazyLoad(
  () => import("./Wiki"),
  (module) => module.default,
);
