import { lazyLoad } from "@/utils/loadable";

export const TestRegisterPage = lazyLoad(
  () => import("./testRegister"),
  (module) => module.default,
);
