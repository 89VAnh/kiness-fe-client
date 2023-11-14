import TemplatePage from "../shared/template-page/TemplatePage";
import { renderWikiMenu } from "./utils/render";

export default function Wiki() {
  return TemplatePage(renderWikiMenu);
}
