import { lazyLoad } from "@/utils/loadable";

export const EquipmentPage = lazyLoad(
  () => import("./Equipment"),
  (module) => module.default,
);
