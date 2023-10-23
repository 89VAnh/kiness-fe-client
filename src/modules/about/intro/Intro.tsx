import TemplatePage from "@/modules/shared/template-page/TemplatePage";

import { renderAboutMenus } from "../utils/render";

export default function Intro() {
  return TemplatePage(renderAboutMenus);
}
