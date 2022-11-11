export const apps = [
    {
      name: 'DupdubEditorApp', // 编辑器子应用名称
      devEntry: '//dupdubeditor-sit.dupdub.com/', // 编辑器开发环境地址
      sitEntry: '//dupdubeditor-sit.dupdub.com/', // 编辑器测试环境地址
      preEntry: '//dupdubeditor-pre.dupdub.com/', // 编辑器预发环境地址
      prdEntry: '//dupdubeditor.dupdub.com/', // 编辑器线上环境地址
      activeRule: '/overview/article-voice', // 编辑器路由
      props: {
        baseApp: 'moyin-overseas' // 传递给编辑器的参数
      }
    }
  ]