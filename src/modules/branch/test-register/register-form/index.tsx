import { lazyLoad } from "@/utils/loadable";

export const RegisterForm = lazyLoad(
  () => import("./RegisterForm"),
  (module) => module.default,
);
