'use strict';
var angular = require('angular');
require('angular-ui-router');
require('angular-sanitize');
require('angular-animate');
require('ionic');
require('ionic-angular');
require('ng-cordova');

var modulename = 'common';

module.exports = function(namespace) {

    var fullname = namespace + '.' + modulename;

    var app = angular.module(fullname, ['ui.router', 'ionic', 'ngCordova']);
    // inject:folders start
    require('./controllers')(app);
    require('./services')(app);
    // inject:folders end
    app.namespace = app.namespace || {};

    var configRoutesDeps = ['$stateProvider', '$urlRouterProvider'];
    var configRoutes = function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/search');
        $stateProvider
            .state('search', {
                url: '/search',
                template: require('./views/search.html'),
                controller : fullname + '.searchController as vm'
            })
            .state('details', {
                url: '/details',
                template: require('./views/details.html'),
                controller : fullname + '.detailsController as vm',
                params : {movie: null}
            })
            .state('review',{
                url:'/review',
                template: require('./views/review.html'),
                params: {content: null},
                controller: fullname + '.reviewController as vm'
            });
    };
    configRoutes.$inject = configRoutesDeps;
    app.config(configRoutes);

    return app;
};