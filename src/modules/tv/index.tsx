import { lazyLoad } from "@/utils/loadable";

export const TVLocalPage = lazyLoad(
  () => import("./local/TVLocal"),
  (module) => module.default,
);

export const TVWorldPage = lazyLoad(
  () => import("./world/TVWorld"),
  (module) => module.default,
);
