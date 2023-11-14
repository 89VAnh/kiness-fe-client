import { lazyLoad } from "@/utils/loadable";

export const PrivacyPolicyPage = lazyLoad(
  () => import("./PrivacyPolicy"),
  (module) => module.default,
);
