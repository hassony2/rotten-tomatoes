'use strict';
var controllername = 'reviewController';

module.exports = function(app) {
    var fullname = app.name + '.' + controllername;
    /*jshint validthis: true */

    var deps = ['$stateParams'];

    function controller($stateParams) {
        var vm = this;
        vm.controllername = fullname;
        vm.review = $stateParams.content;

    }

    controller.$inject = deps;
    app.controller(fullname, controller);
};
