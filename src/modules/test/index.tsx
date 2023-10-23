import { lazyLoad } from "@/utils/loadable";

export const TestPage = lazyLoad(
  () => import("./Test"),
  (module) => module.default,
);
