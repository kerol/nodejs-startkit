class BaseConfig {
    DEBUG = true;
    PORT = 3000;
    INSTALLED_APPS = [
        'appdemo',
    ];

    constructor() {}
}


class DevConfig extends BaseConfig {
    private ENV = 'dev';
    PORT = 3001;

    constructor() {
        super();
    }
}


class ProdConfig extends BaseConfig {
    private ENV = 'prod';
    PORT = 3002;

    constructor() {
        super();
    }
}


module.exports = {
    dev: DevConfig,
    prod: ProdConfig
};