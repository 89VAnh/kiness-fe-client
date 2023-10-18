const HOME_URL = "/";

// Introduction
const INTRO_URL = "/intro";
const NEWS_URL = `${INTRO_URL}/news`;
const MISSION_URL = `${INTRO_URL}/mission`;

// Training
const TRAINING_URL = "/training";
const GROWTH_URL = `${TRAINING_URL}/growth-method`;
const SUPPORT_EQUIP_URL = `${TRAINING_URL}/support-equip`;
const TRAINING_PROGRAM_URL = `${TRAINING_URL}/training-program`;
const FEE_URL = `${TRAINING_URL}/fee`;
const QUALITY_URL = `${TRAINING_URL}/quality`;

// Wiki
const WIKI_URL = "/wiki";
const STAGES_GROWTH_URL = `${WIKI_URL}/stages-of-growth`;
const BENEFIT_GROWTH_URL = `${WIKI_URL}/benefit-growth`;
const HORMONE_URL = `${WIKI_URL}/hormone`;
const REASONS_GROWTH_URL = `${WIKI_URL}/reasons-growth`;
const POINT_GROWTH_URL = `${WIKI_URL}/point-growth`;
const RANGE_GROWTH_URL = `${WIKI_URL}/range-growth`;
const INFO_GROWTH_URL = `${WIKI_URL}/info-growth`;
const EXAM_GROWTH_URL = `${WIKI_URL}/exam-growth`;

// Testing
const TESTING_URL = "/testing";
const GROWTH_FORECAST_URL = `${TESTING_URL}/growth-forecast`;
const SCHEDULE_TRAIN_URL = `${TESTING_URL}/schedule-train`;
const ADVISE_URL = `${TESTING_URL}/advise`;

// User
const LOGIN_URL = "/login";
const REGISTER_URL = "/register";
const PRIVACY_POLICY = "/privacy-policy";
const TERMS_USE = "/terms-use";

// Branch
const BRANCH_URL = "/branch";
const TEST_REGISTER_URL = "/register-for-the-test";

const breadcrumbNameMap: Record<string, string> = {
  [HOME_URL]: "Trang chủ",
};

export {
  BRANCH_URL,
  TESTING_URL,
  GROWTH_FORECAST_URL,
  SCHEDULE_TRAIN_URL,
  ADVISE_URL,
  GROWTH_URL,
  HOME_URL,
  INTRO_URL,
  LOGIN_URL,
  MISSION_URL,
  NEWS_URL,
  PRIVACY_POLICY,
  REGISTER_URL,
  WIKI_URL,
  STAGES_GROWTH_URL,
  BENEFIT_GROWTH_URL,
  HORMONE_URL,
  REASONS_GROWTH_URL,
  POINT_GROWTH_URL,
  RANGE_GROWTH_URL,
  INFO_GROWTH_URL,
  EXAM_GROWTH_URL,
  TERMS_USE,
  TEST_REGISTER_URL,
  TRAINING_URL,
  SUPPORT_EQUIP_URL,
  TRAINING_PROGRAM_URL,
  FEE_URL,
  QUALITY_URL,
  breadcrumbNameMap,
};
