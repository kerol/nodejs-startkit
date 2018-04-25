import Koa = require('koa');
const path = require('path');
const bodyParser = require('koa-bodyparser');
const nunjucks = require('koa-nunjucks-2');
const staticFiles = require('koa-static');


module.exports = (app: Koa) => {

    app.use(bodyParser());

    app.use(staticFiles(path.resolve(__dirname, '../static')));

    app.use(nunjucks({
        ext: 'html',
        path: path.join(__dirname, '../templates'),
        nunjucksConfig: {
            trimBlocks: true,
        }
    }))
}