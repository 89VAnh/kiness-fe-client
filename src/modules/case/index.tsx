import { lazyLoad } from "@/utils/loadable";

export const StoryListPage = lazyLoad(
  () => import("./story/story-list/StoryList"),
  (module) => module.default,
);

export const StoryDetailPage = lazyLoad(
  () => import("./story/story-detail/StoryDetail"),
  (module) => module.default,
);

export const PoseListPage = lazyLoad(
  () => import("./pose/pose-list/PoseList"),
  (module) => module.default,
);

export const PoseDetailPage = lazyLoad(
  () => import("./pose/pose-detail/PoseDetail"),
  (module) => module.default,
);

export const OldListPage = lazyLoad(
  () => import("./old/old-list/OldList"),
  (module) => module.default,
);

export const OldDetailPage = lazyLoad(
  () => import("./old/old-detail/OldDetail"),
  (module) => module.default,
);

export const FatListPage = lazyLoad(
  () => import("./fat/fat-list/FatList"),
  (module) => module.default,
);

export const FatDetailPage = lazyLoad(
  () => import("./fat/fat-detail/FatDetail"),
  (module) => module.default,
);
