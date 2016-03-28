'use strict';
var controllername = 'searchController';

module.exports = function(app) {
    var fullname = app.name + '.' + controllername;
    /*jshint validthis: true */

    var deps = [app.name + '.rottenTomatoes'];

    function controller(rottenTomatoes) {
        var vm = this;
        vm.search = '';
        vm.movies = [];
        vm.getMovies = function() {
            rottenTomatoes.getMovies(vm.search)
                .then(function(res) {
                    vm.movies = res.data.movies;
                });
        };
        vm.controllername = fullname;
    }

    controller.$inject = deps;
    app.controller(fullname, controller);
};