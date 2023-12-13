
const esbuild = require('esbuild');
const config = require('./esbuild.config')
const { readFile, writeFile, mkdir } = require("fs").promises;
// 打包
// buildSync 不能使用plugins
const esbuildHandle = () => esbuild.build({
    ...config
})

esbuildHandle().then(async (res) => {
    /*
        res:{
            errors: [],
            warnings: [],
            outputFiles:[]
        }

        config
            write: false
                false res.outputFiles有值 
                true 直接打包成文件
    */
    if (res.length) throw new Error('compile error');
    console.log('compile success');
    const script = res
    console.log(script);
    
    await mkdir("./lib");
    const html = await readFile("index.html", "utf8");
    const content = html.replace(
        "<body>",
        `<body><script type="module">${script.outputFiles?.[0].text}</script>`
    );// 将script插入到body标签内
    await writeFile("lib/index.html", content);
})

