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
