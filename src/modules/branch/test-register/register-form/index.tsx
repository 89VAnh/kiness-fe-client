import { lazyLoad } from "@/utils/loadable";

export const RegisterForm = lazyLoad(
  () => import("./registerForm"),
  (module) => module.default,
);
