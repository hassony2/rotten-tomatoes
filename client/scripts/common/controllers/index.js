'use strict';

module.exports = function(app) {
    // inject:start
    require('./movieController')(app);
    require('./moviesController')(app);
    // inject:end
};