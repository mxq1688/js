#### tsc --init
>初始化 tsconfig.json
#### tsc 
>把ts转为js
#### ts-node
>运行ts文件命令
```
ts-node index.ts
```
#### 注意
>Node.js包是用JavaScript而不是Typescript编写的。为了获得其包的类型定义，你需要安装名为@types 的第三方包。
```
npm install -D @types/node
npm install -D @types/express
```
>或者创建 .d.ts声明文件
```
declare module 'express'
```