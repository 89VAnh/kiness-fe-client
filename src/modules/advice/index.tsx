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

export const InquiryListPage = lazyLoad(
  () => import("./inquiry/inquiry-list/InquiryList"),
  (module) => module.default,
);

export const InquiryDetailPage = lazyLoad(
  () => import("./inquiry/inquiry-detail/InquiryDetail"),
  (module) => module.default,
);

export const InquiryWritePage = lazyLoad(
  () => import("./inquiry/inquiry-write/InquiryWrite"),
  (module) => module.default,
);
