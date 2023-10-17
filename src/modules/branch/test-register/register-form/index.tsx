import { lazyLoad } from "@/utils/loadable";

export const NewsPage = lazyLoad(
  () => import("./registerForm"),
  (module) => module.default,
);
