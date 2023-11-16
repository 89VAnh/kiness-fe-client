import { lazyLoad } from "@/utils/loadable";

export const VerifyAccountPage = lazyLoad(
  () => import("./VerifyAccount"),
  (module) => module.default,
);
