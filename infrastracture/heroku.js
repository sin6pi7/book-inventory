const heroin = require('heroin-js');
const configurator = heroin(process.env.HEROKU_API_TOKEN, {debug: false});

configurator(require('./test'));
configurator(require('./prod'));

