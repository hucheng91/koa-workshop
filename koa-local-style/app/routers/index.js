const apiV1 = require('./api/v1');
const pageRouter = require('./page');

module.exports = {
    ...apiV1,
    ...pageRouter
};