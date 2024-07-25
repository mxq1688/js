import * as Vue from "vue";
import { useModule } from "vue-module-loader";
import localModule from "./module";
useModule(
  "../module/.iife.js",
  { Vue }
).then(() => {
  useModule(localModule);
});
