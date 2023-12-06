import { lazyLoad } from "@/utils/loadable";

export const GenPage = lazyLoad(
  () => import("./gen/Gen"),
  (module) => module.default,
);

export const CurrentPage = lazyLoad(
  () => import("./current/Current"),
  (module) => module.default,
);

export const ChartGrowthPage = lazyLoad(
  () => import("./chart-growth/ChartGrowth"),
  (module) => module.default,
);
