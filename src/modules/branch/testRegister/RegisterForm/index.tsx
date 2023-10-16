import { lazyLoad } from "@/utils/loadable";

export const NewsPage = lazyLoad(
  () => import("./RegisterForm"),
  (module) => module.default,
);
