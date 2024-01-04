/*
借助vscode中的volar给全局组件加上提示效果
首先安装@vue/runtime-core
创建当前components.d.ts


注意:当用户使用组件库的时候需要让用户在tsconfig.json中配置types:["@vue3-ui/lib/src/components"]才会出现提示效果
  "compilerOptions": {
      //...
      "types": ["easyest/lib/src/components"]
    },
*/

import * as components from "./index";
declare module "@vue/runtime-core" {
  export interface GlobalComponents {
    EaButton: typeof components.Button;
    EaIcon: typeof components.Icon;
  }
}
export {};
