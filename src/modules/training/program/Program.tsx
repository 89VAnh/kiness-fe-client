import TemplatePage from "@/modules/shared/template-page/TemplatePage";

import { renderTrainMenus } from "../utils/render";

export default function Program() {
  return TemplatePage(renderTrainMenus);
}
