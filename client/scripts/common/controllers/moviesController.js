'use strict';
var controllername = 'moviesController';

module.exports = function(app) {
    var fullname = app.name + '.' + controllername;
    /*jshint validthis: true */

    var deps = [app.name + '.moviesFetcher', '$log'];

    function controller(moviesFetcher, $log) {
        var that = this;
        that.searchString = '';
        // that.movieList = {};
        that.getMovies = function() {
            if (!that.searchString) {
                $log.debug('give me something to search');
            } else {
                moviesFetcher.getMovies(that.searchString).then(function(data) {
                    $log.debug('search string found', that, moviesFetcher);
                    that.movieList = moviesFetcher.movieList.list;
                });
            }
        };
    }

    controller.$inject = deps;
    app.controller(fullname, controller);
};