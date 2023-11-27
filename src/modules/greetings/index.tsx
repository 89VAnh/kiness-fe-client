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

export const MapListPage = lazyLoad(
  () => import("./branch/map/map-list/MapList"),
  (module) => module.default,
);

export const MapDetailPage = lazyLoad(
  () => import("./branch/map/map-detail/MapDetail"),
  (module) => module.default,
);

export const ResearcherPage = lazyLoad(
  () => import("./lab/researcher/Researcher"),
  (module) => module.default,
);

export const ThesisPage = lazyLoad(
  () => import("./lab/thesis/Thesis"),
  (module) => module.default,
);

export const PatentPage = lazyLoad(
  () => import("./lab/patent/Patent"),
  (module) => module.default,
);

export const BookPage = lazyLoad(
  () => import("./lab/book/Book"),
  (module) => module.default,
);
