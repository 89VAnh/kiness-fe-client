import { lazyLoad } from "@/utils/loadable";

export const HeightPage = lazyLoad(
  () => import("./height/Height"),
  (module) => module.default,
);

export const StandingPage = lazyLoad(
  () => import("./standing/Standing"),
  (module) => module.default,
);

export const PeriodPage = lazyLoad(
  () => import("./period/Period"),
  (module) => module.default,
);

export const FatPage = lazyLoad(
  () => import("./fat/Fat"),
  (module) => module.default,
);

export const ColumnListPage = lazyLoad(
  () => import("./column/column-list/ColumnList"),
  (module) => module.default,
);

export const ColumnDetailPage = lazyLoad(
  () => import("./column/column-detail/ColumnDetail"),
  (module) => module.default,
);
