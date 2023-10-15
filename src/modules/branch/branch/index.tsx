import { lazyLoad } from "@/utils/loadable";

export const NewsPage = lazyLoad(
  () => import("./Branch"),
  (module) => module.default,
);
