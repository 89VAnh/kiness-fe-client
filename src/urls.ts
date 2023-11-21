const HOME_URL = "/";

// Info
const INFO_URL = "/info";
const GREETING_URL = `${INFO_URL}/greetings`;
const HISTORY_URL = `${INFO_URL}/history`;
const ORGAN_URL = `${INFO_URL}/organ`;
const MAP_URL = `${INFO_URL}/map`;
const RESEARCHER_URL = `${INFO_URL}/researcher`;
const THESIS_URL = `${INFO_URL}/thesis`;
const PATENT_URL = `${INFO_URL}/patent`;
const BOOK_URL = `${INFO_URL}/book`;

// advise
const ADVICE_URL = "/advise";
const ADVICE_OVERHAUL_URL = `${ADVICE_URL}/overhaul`;
const ADVICE_EX_URL = `${ADVICE_URL}/ex`;
const ADVICE_FAQ_URL = `${ADVICE_URL}/faq`;
const ADVICE_INQUIRY_URL = `${ADVICE_URL}/inquiry`;

// program
const PROGRAM_URL = "/program";
const PROGRAM_QUESTION_URL = `${PROGRAM_URL}/question`;
const PROGRAM_METHOD_URL = `${PROGRAM_URL}/method`;
const PROGRAM_SYSTEM_URL = `${PROGRAM_URL}/system`;

// case
const CASE_URL = "/case";
const CASE_STORY_URL = `${CASE_URL}/story`;
const CASE_POSTURE_URL = `${CASE_URL}/posture`;
const CASE_OLD_URL = `${CASE_URL}/old`;
const CASE_FAT_URL = `${CASE_URL}/fat`;

// Info growth
const INFO_GROWTH_URL = "/info-growth";
const INFO_GROWTH_HEIGHT_URL = `${INFO_GROWTH_URL}/height`;
const INFO_GROWTH_STANDING_URL = `${INFO_GROWTH_URL}/standing`;
const INFO_GROWTH_PERIOD_URL = `${INFO_GROWTH_URL}/period`;
const INFO_GROWTH_FAT_URL = `${INFO_GROWTH_URL}/fat`;
const INFO_GROWTH_COLUMN_URL = `${INFO_GROWTH_URL}/column`;

// Tv
const TV_URL = "/tv";
const TV_LOCAL_URL = `${TV_URL}/local`;
const TV_WORLD_URL = `${TV_URL}/world`;

// expected
const EXPECTED_URL = "/expected";
const EXPECTED_GEN_URL = `${EXPECTED_URL}/gen`;
const EXPECTED_CURRENT_URL = `${EXPECTED_URL}/current`;
const EXPECTED_CHART_URL = `${EXPECTED_URL}/chart`;

const breadcrumbNameMap: Record<string, string> = {
  [HOME_URL]: "Trang chủ",
};

export {
  HOME_URL,
  INFO_URL,
  GREETING_URL,
  HISTORY_URL,
  ORGAN_URL,
  MAP_URL,
  RESEARCHER_URL,
  THESIS_URL,
  PATENT_URL,
  BOOK_URL,
  ADVICE_URL,
  ADVICE_OVERHAUL_URL,
  ADVICE_EX_URL,
  ADVICE_FAQ_URL,
  ADVICE_INQUIRY_URL,
  PROGRAM_URL,
  PROGRAM_QUESTION_URL,
  PROGRAM_METHOD_URL,
  PROGRAM_SYSTEM_URL,
  CASE_STORY_URL,
  CASE_POSTURE_URL,
  CASE_OLD_URL,
  CASE_FAT_URL,
  INFO_GROWTH_HEIGHT_URL,
  INFO_GROWTH_STANDING_URL,
  INFO_GROWTH_PERIOD_URL,
  INFO_GROWTH_FAT_URL,
  INFO_GROWTH_COLUMN_URL,
  TV_LOCAL_URL,
  TV_WORLD_URL,
  EXPECTED_GEN_URL,
  EXPECTED_CURRENT_URL,
  EXPECTED_CHART_URL,
  breadcrumbNameMap,
};
