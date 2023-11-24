import { lazyLoad } from "@/utils/loadable";

export const OverhaulPage = lazyLoad(
  () => import("./overhaul/Overhaul"),
  (module) => module.default,
);
