'use strict';

module.exports = function(app) {
    // inject:start
    require('./detailsController')(app);
    require('./reviewController')(app);
    require('./searchController')(app);
    // inject:end
};