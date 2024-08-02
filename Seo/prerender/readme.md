#### 预渲染配置
> vite
```
vitePrerender({
    // Required - The path to the vite-outputted app to prerender.
    staticDir: path.join(__dirname, 'dist'),
    // Optional - The location of index.html
    indexPath: path.join(__dirname, 'dist', 'index.html'),

    outputDir: path.join(__dirname, 'dist/prerendered'),
    // Required - Routes to render.
    routes: ['/', '/makehome', '/broadcastCenter'],
})
```

#### nginx配置
```
预渲染html在 dist/prerendered目录下

location / {
    try_files /prerendered$request_uri/index.html $uri $uri/ /index.html;
}

```