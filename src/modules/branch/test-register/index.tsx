import { lazyLoad } from "@/utils/loadable";

export const TestRegister = lazyLoad(
  () => import("./TestRegister"),
  (module) => module.default,
);
