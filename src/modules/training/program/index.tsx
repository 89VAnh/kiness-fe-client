import { lazyLoad } from "@/utils/loadable";

export const ProgramPage = lazyLoad(
  () => import("./Program"),
  (module) => module.default,
);
