import run from "../utils/run";
import { vue3UiPath } from "../utils/paths";
import { series } from "gulp";
export const publishComponent = async () => {
  run("release-it", `${vue3UiPath}/dist`);
};
export default series(async () => publishComponent());
