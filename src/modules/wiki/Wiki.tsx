import TemplatePage from "../shared/templatePage/TemplatePage";
import { renderWikiMenu } from "./utils/render";

export default function Wiki() {
  return TemplatePage(renderWikiMenu);
}
