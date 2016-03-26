'use strict';
var controllername = 'movieController';

module.exports = function(app) {
    var fullname = app.name + '.' + controllername;
    /*jshint validthis: true */

    var deps = ['moviesFetcher', '$log'];

    function controller(moviesFetcher, $log) {
        var vm = this;
        vm.controllername = fullname;

        vm.getUsers = function(index){
            return moviesFetcher.movieList(index);
        };
    }

    controller.$inject = deps;
    app.controller(fullname, controller);
};
