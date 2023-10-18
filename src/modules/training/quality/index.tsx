import { lazyLoad } from "@/utils/loadable";

export const QualityPage = lazyLoad(
  () => import("./Quality"),
  (module) => module.default,
);
