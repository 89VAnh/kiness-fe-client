const HOME_URL = "/";

// Introduction
const INTRO_URL = "/intro";
const NEWS_URL = `${INTRO_URL}/news`;
const MISSION_URL = `${INTRO_URL}/mission`;

// Training
const GROWTH_URL = "/growth-method";

// Wiki
const STAGES_GROWTH_URL = "/stages-of-growth";

// Testing
const GROWTH_FORECAST_URL = "/growth-forecast";

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
  GROWTH_FORECAST_URL,
  GROWTH_URL,
  HOME_URL,
  INTRO_URL,
  LOGIN_URL,
  MISSION_URL,
  NEWS_URL,
  PRIVACY_POLICY,
  REGISTER_URL,
  STAGES_GROWTH_URL,
  TERMS_USE,
  TEST_REGISTER_URL,
  breadcrumbNameMap,
};
