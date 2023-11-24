import { lazyLoad } from "@/utils/loadable";

export const GreetingPage = lazyLoad(
  () => import("./histories/greeting/Greeting"),
  (module) => module.default,
);

export const HistoryPage = lazyLoad(
  () => import("./histories/history/History"),
  (module) => module.default,
);

export const OrganPage = lazyLoad(
  () => import("./branch/organ/Organ"),
  (module) => module.default,
);
