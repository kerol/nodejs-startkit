const app = require('./app');
const utils = require('./utils');

let port = app.context.config.PORT;
app.listen(port, () => {
    utils.info('server is running at http://localhost:' + port)
});

