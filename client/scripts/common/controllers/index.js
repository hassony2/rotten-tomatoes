'use strict';

module.exports = function(app) {
    // inject:start
    require('./moviesController')(app);
    // inject:end
};