import { lazyLoad } from "@/utils/loadable";

export const GrowthPage = lazyLoad(
  () => import("./Growth"),
  (module) => module.default,
);
