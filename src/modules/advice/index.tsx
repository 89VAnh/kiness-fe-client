import { lazyLoad } from "@/utils/loadable";

export const OverhaulPage = lazyLoad(
  () => import("./overhaul/Overhaul"),
  (module) => module.default,
);

export const ExPage = lazyLoad(
  () => import("./ex/Ex"),
  (module) => module.default,
);

export const FaqPage = lazyLoad(
  () => import("./faq/Faq"),
  (module) => module.default,
);

export const InquiryPage = lazyLoad(
  () => import("./inquiry/Inquiry"),
  (module) => module.default,
);
