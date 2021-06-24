# gfy-pc-template

> 这是一篇关于 `vue2x` PC端基础框架的使用文档，本框架以 `vue全家桶+element` 为基础进行搭建的，包括且不限于 `vue+vue-router+vuex+axios+element` 等核心包。

## 包含功能

- axios的二次封装，模块化处理
- vuex模块化处理、刷新消失问题处理
- filter全局过滤文件
- 全局自定义loading组件集成
- element-message问题解决方案集成
- svg用法集成
- 路由模块化及权限处理
- element全局css分类封装，包括（element-variables.scss、mixin.scss、reset.scss、variables.scss等）
- 多环境打包配置，development、sit、production
- 打包优化，代码压缩，图片压缩，去掉打包之后的打印（可选）
- md5加密方法集成，全局引入

备注：

> 其他内容可按照项目需求、按需引入

## 目录结构

``` bash
├── public                     # 静态资源
│   │── favicon.ico            # favicon图标
│   └── index.html             # html模板
├── src						   # 源代码
│   ├── api                    # 所有请求
│   ├── assets                 # css img等静态资源
│   ├── components             # 全局公用组件       
│   ├── filters                # 全局 filter
│   ├── icons                  # 项目所有 svg icons
│   ├── router                 # 路由
│   ├── store                  # 全局 store管理
│   ├── utils                  # 全局公用方法
│   ├── views                  # views 所有页面
│   ├── App.vue                # 入口页面
│   ├── main.js                # 入口文件 加载组件 初始化等
│   └── permission.js          # 权限管理
├── .browserslistrc
├── .editorconfig
├── .env.development           # 本地环境
├── .env.production            # 正式环境
├── .env.sit                   # 集成环境
├── .eslintrc.js               # eslint 配置项
├── .postcssrc.js
├── babel.config.js
├── package-lock.json
├── package.json
├── README.md
└── vue.config.js
```

