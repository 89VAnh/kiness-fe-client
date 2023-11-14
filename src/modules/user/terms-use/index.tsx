import { lazyLoad } from "@/utils/loadable";

export const TermsUsePage = lazyLoad(
  () => import("./TermsUse"),
  (module) => module.default,
);
