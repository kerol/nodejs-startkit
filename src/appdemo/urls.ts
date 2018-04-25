import Koa = require('koa');
const views = require('./views');
const router = require('koa-router')();


module.exports = (app: Koa) => {
    router.get('/', views.index);
    app.use(router.routes())
        .use(router.allowedMethods())
};