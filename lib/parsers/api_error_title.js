// Same as @apiParamTitle
var apiParser = require('./api_param_title.js');

/**
 * Exports
 */
module.exports = {
    parse        : apiParser.parse,
    path         : 'global.errorTitle',
    method       : apiParser.method,
    allowMultiple: true,
    deprecated   : true,
    alternative  : '@apiDefine'
};
