import { lazyLoad } from "@/utils/loadable";

export const GreetingPage = lazyLoad(
  () => import("./histories/greeting/Greeting"),
  (module) => module.default,
);
