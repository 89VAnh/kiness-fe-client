import { lazyLoad } from "@/utils/loadable";

export const NewsPage = lazyLoad(
  () => import("./testRegister"),
  (module) => module.default,
);
