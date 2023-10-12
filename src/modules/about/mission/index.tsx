import { lazyLoad } from "@/utils/loadable";

export const MissionPage = lazyLoad(
  () => import("./Mission"),
  (module) => module.default,
);
