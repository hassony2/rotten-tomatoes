'use strict';
var controllername = 'movieController';

module.exports = function(app) {
    var fullname = app.name + '.' + controllername;
    /*jshint validthis: true */

    var deps = [app.name + '.moviesFetcher', '$log', '$stateParams'];

    function controller(moviesFetcher, $log, $stateParams) {
        var vm = this;
        vm.index = parseInt($stateParams.movieId);
        // vm.controllername = fullname;
        vm.checkState = function() {
            $log.debug($stateParams, vm.index);
        };

        vm.getMovie = function(movieNb) {
            vm.movie = moviesFetcher.movieList.list[movieNb];

            $log.debug(moviesFetcher.movieList.list[movieNb], vm);
        };
        vm.getNext = function() {
            return vm.index + 1;
        };
        vm.checkState();
        vm.getMovie(vm.index);
    }
    controller.$inject = deps;
    app.controller(fullname, controller);
};