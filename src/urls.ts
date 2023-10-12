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

const breadcrumbNameMap: Record<string, string> = {
  [HOME_URL]: "Trang chủ",
};

export {
  GROWTH_FORECAST_URL,
  GROWTH_URL,
  HOME_URL,
  INTRO_URL,
  NEWS_URL,
  MISSION_URL,
  STAGES_GROWTH_URL,
  LOGIN_URL,
  REGISTER_URL,
  PRIVACY_POLICY,
  TERMS_USE,
  breadcrumbNameMap,
};
