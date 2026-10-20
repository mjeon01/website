import { renderToString } from "react-dom/server";
import App from "./App";
export { routePaths } from "./data/routes";
export { pageMetadata } from "./data/seo";

export function render(path: string) {
  return renderToString(<App path={path} />);
}
