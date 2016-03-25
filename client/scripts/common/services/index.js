'use strict';

module.exports = function(app) {
    // inject:start
    require('./moviesFetcher')(app);
    // inject:end
};