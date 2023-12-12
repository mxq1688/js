
```bash
git clone https://github.com/wmui/vue-ssr-demo.git
cd vue-ssr-demo
npm install
npm run start
```

打包生成两个js文件 一个用于客户端client.js 一个是放在node环境运行的
client.js需要在前端加载
  async xxx() {
      const res = await this.$api.userInfo.xxx({})
      this.html = res.html
      this.$nextTick(() => {
        var script = document.createElement('script')
        script.type = 'text/javascript'
        script.src = res.js
        document.body.appendChild(script)
      })
    }
  }