import { lazyLoad } from "@/utils/loadable";

export const Branch = lazyLoad(
  () => import("./Branch"),
  (module) => module.default,
);
