import { lazyLoad } from "@/utils/loadable";

export const RegisterMemberPage = lazyLoad(
  () => import("./RegisterMember"),
  (module) => module.default,
);
