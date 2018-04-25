### About
Nodejs后端脚手架；

Inspired and special thanks to [iKcamp](https://github.com/ikcamp/koa2-tutorial.git )

`Philosophy`: 集成合适的框架和组件，打造Nodejs后端的**Big Plane**

### Features
- 使用最新版Node^9.11.1，支持async/await语法；
- 使用Koa^2.5.0框架，面向中间件开发；
- 使用nunjucks模板，功能更加强大；
- 使用TypeScript代替js，更适合工程开发；
- 将模块分成不同app开发，适合项目协作；
- [x] 每个app下面定义urls、models、views，项目启动自动发现注入，只需要声明使用的apps即可；
- [x] 使用webpack打包代码；
- [x] 数据库集成MySQL、Redis、MongoDB，通过配置灵活选择；
- [x] 集成log4js日志记录和sentry；
- [x] 集成tslint静态检查代码和jstest；
- [x] 集成babel国际化；
- [x] pm2相关配置；

### npm install
由于开发环境需要使用TypeScript编译成js，所以需要安装@types/package-name这样的依赖；

production dependencies:
```
npm install --save koa
npm install --save koa-router
npm install --save koa-bodyparser
npm install --save nunjucks
npm install --save koa-nunjucks-2
npm install --save koa-static
```
development dependencies:
```
npm install --save-dev @types/node
npm install --save-dev @types/koa
npm install --save-dev @types/koa-router
npm install --save-dev @types/koa-bodyparser
```
global dependencies:
```
npm install -g npm
npm install -g pm2
npm install -g webpack
npm install -g typescript
npm install -g nodemon
```

### Finally
TODO：剩余集成数据库、日志监控部署、国际化；

Nodejs作为后端前期写起来TypeScript还是爽的，但是在数据库应用方面还是缺少比较健全的库或ORM;

Nodejs社区更新迭代有点快，中小型项目可以尝试一下;

Nodejs backend web development will be better as time goes by, enjoy!
