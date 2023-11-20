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
  breadcrumbNameMap,
};
