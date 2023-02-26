# MiaoHome
Miao Home! 一个使用 React 的导航页。（完整功能需使用 Vercel 进行部署）
## 使用

安装依赖：

```shell
pnpm install
```

### 1. 配置

配置文件为 `/config.ts` ，可使用vim/vsc等工具对文件进行修改，并注意对favicon等资源进行修改。

### 2. 编译

```shell
pnpm build
```

生成的文件存放在 `/dist` 目录下，将其上传至 Vercel 即可

## 关于

追番页面来自`BiliBili`数据
如需本地部署请自行修改`/src/views/BangumiView.vue`中api地址

