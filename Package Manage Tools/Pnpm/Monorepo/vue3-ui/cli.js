#!/usr/bin/env node

import { program } from "commander";
import { createRequire } from "module";
import shelljs from "shelljs";

const require = createRequire(import.meta.url);

const pag = require('./package.json');
const fs = require('fs');
const path = require('path');


program.command('modify')
  .action(() => {

    // copy README
    let _script = 'cp ../README.md README.md';
    shelljs.exec(_script);

    let _file = path.join(process.cwd(), 'package.json');
    fs.readFile(_file, 'utf-8', (err, data) => {
      if (err) {
        throw new Error('read package.json err');
      }
      let jsonData = JSON.parse(data);
      jsonData['name'] = `@mem/${pag.name}`;
      jsonData['version'] = pag.version;
      jsonData['main'] = "lib/index.js";
      jsonData['module'] = "es/index.mjs"
      jsonData['typings']= 'lib/index.d.ts'
      jsonData['description'] = 'vue3组件库';
      jsonData['keywords'] = ['vue3-ui', 'vue3组件库']
      jsonData['author'] = 'mxq'
      jsonData['files']=['es', 'lib']
      jsonData['sideEffects']=['**/*.css']

      fs.writeFile(_file, JSON.stringify(jsonData, null, 4), 'utf-8', (err) => {
        if (err) {
          throw new Error('write package.json err');
        }
        console.log('-- build success --');
      })
    })
  });

program.command('publish')
  .action(async () => {
    console.log('-- begin publish --');
    // let _script = 'cd build && npm set registry http://npm.mobvoi.com/';

    // let { code } = shelljs.exec(_script);
    // if (code != 0) {
    //   throw Error();
    // }
    // let _script = 'cd dist && npm adduser --registry http://npm.mobvoi.com/';
    // let res = shelljs.exec(_script);
    _script = 'cd dist && npm publish --registry http://npm.mobvoi.com/'
    res = shelljs.exec(_script);

  });

program.parse(process.argv)


