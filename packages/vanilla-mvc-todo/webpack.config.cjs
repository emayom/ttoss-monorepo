const { merge } = require('../../node_modules/webpack-merge');
const common = require('../../webpack/webpack.common.cjs');
const dev = require('../../webpack/webpack.dev.cjs');

module.exports = dev;
