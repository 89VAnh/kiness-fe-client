import { lazyLoad } from "@/utils/loadable";

export const QuestionPage = lazyLoad(
  () => import("./question/Question"),
  (module) => module.default,
);

export const GrowthMethodPage = lazyLoad(
  () => import("./growth-method/GrowthMethod"),
  (module) => module.default,
);

export const GrowthSystemPage = lazyLoad(
  () => import("./growth-system/GrowthSystem"),
  (module) => module.default,
);
