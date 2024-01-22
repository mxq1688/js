import commandLineArgs from 'command-line-args';
import commandLineUsage from 'command-line-usage';
import { readFile } from 'fs/promises';
import prompts from 'prompts';
import gitClone from './gitClone.js';

const pkg = JSON.parse(
  await readFile(new URL('./package.json', import.meta.url))
);
//配置命令参数
const optionDefinitions = [
  { name: 'version', alias: 'v', type: Boolean },
  { name: 'help', alias: 'h', type: Boolean }
];
const options = commandLineArgs(optionDefinitions);

if (options.version) {
  console.log(`v${pkg.version}`);
}

//帮助命令
const helpSections = [
  {
    header: 'create-easyest',
    content: '一个快速生成组件库搭建环境的脚手架'
  },
  {
    header: 'Options',
    optionList: [
      {
        name: 'version',
        alias: 'v',
        typeLabel: '{underline boolean}',
        description: '版本号'
      },
      {
        name: 'help',
        alias: 'h',
        typeLabel: '{underline boolean}',
        description: '帮助'
      }
    ]
  }
];

if (options.help) {
  console.log(commandLineUsage(helpSections));
}

const promptsOptions = [
  {
    type: 'text',
    name: 'project_name',
    message: '请输入项目名称'
  },
  {
    type: 'select', //单选
    name: 'template',
    message: '请选择一个模板',
    choices: [
      { title: 'kitty-ui', value: 0 },
      { title: 'easyest', value: 1 }
    ]
  },
  {
    type: 'multiselect', //多选
    name: 'study',
    message: '选择学习框架',
    choices: [
      { title: 'Vue', value: 0 },
      { title: 'React', value: 1 },
      { title: 'Angular', value: 2 }
    ]
  }
];

const remoteList = {
  0: 'https://gitee.com/geeksdidi/kittyui.git',
  1: 'https://github.com/qddidi/easyest.git'
};
const getUserInfo = async () => {
  const res = await prompts(promptsOptions);
  if (!res.project_name) return;
  console.log(123);
  gitClone(`direct:${remoteList[res.template]}`, res.project_name, {
    clone: true
  });
};
getUserInfo();
