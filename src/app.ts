import Koa = require('koa')
const config = require('./config');
const utils = require('./utils');
const middleware = require('./middleware');


let env = process.env.NODE_ENV;
if (env == undefined) {
    utils.warn('$NODE_ENV is not set in your profile, use default: dev');
    env = 'dev'
}
utils.info('environment: ', env);
let appConfig = new config[env];

let app = new Koa();
app.context['config'] = appConfig;

// inject middleware
middleware(app);

// register installed apps
let installedApps = appConfig.INSTALLED_APPS;
utils.info('installed apps: ', installedApps);
for(let i=0; i<installedApps.length; i++) {
    let sub_app = installedApps[i];
    let urls = require('./' + sub_app + '/urls');
    urls(app)
}

module.exports = app;