const heroin = require('heroin-js');

const configurator = heroin(process.env.HEROKU_API_TOKEN, {debug: false});
const env = process.env.NODE_ENV || 'production';

configurator(require('./' + env));
