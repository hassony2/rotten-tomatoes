'use strict';
var controllername = 'detailsController';

module.exports = function(app) {
    var fullname = app.name + '.' + controllername;
    /*jshint validthis: true */

    var deps = [app.name + '.rottenTomatoes', '$stateParams'];

    function controller(rottenTomatoes, $stateParams) {
        var vm = this;
        vm.controllername = fullname;

        vm.movie = $stateParams.movie;
        vm.getReviews = function() {
            if (vm.movie && vm.movie.id) {
                rottenTomatoes.getReviews(vm.movie.id)
                    .then(function(res) {
                        vm.reviews = res.data.reviews;
                    });
            } else {
                vm.reviews = [];
            }
        };

        vm.getReviews();
    }

    controller.$inject = deps;
    app.controller(fullname, controller);
};