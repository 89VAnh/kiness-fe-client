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
const REGISTER_EXPERIENCE_URL = "/register-to-experience";

const breadcrumbNameMap: Record<string, string> = {
  [HOME_URL]: "Trang chủ",
};

export {
  ADVISE_URL,
  BENEFIT_GROWTH_URL,
  BRANCH_URL,
  EXAM_GROWTH_URL,
  FEE_URL,
  GROWTH_FORECAST_URL,
  GROWTH_URL,
  HOME_URL,
  HORMONE_URL,
  INFO_GROWTH_URL,
  INTRO_URL,
  LOGIN_URL,
  MISSION_URL,
  NEWS_URL,
  POINT_GROWTH_URL,
  PRIVACY_POLICY,
  QUALITY_URL,
  RANGE_GROWTH_URL,
  REASONS_GROWTH_URL,
  REGISTER_EXPERIENCE_URL,
  REGISTER_URL,
  SCHEDULE_TRAIN_URL,
  STAGES_GROWTH_URL,
  SUPPORT_EQUIP_URL,
  TERMS_USE,
  TESTING_URL,
  TEST_REGISTER_URL,
  TRAINING_PROGRAM_URL,
  TRAINING_URL,
  WIKI_URL,
  breadcrumbNameMap,
};
