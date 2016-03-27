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
        $urlRouterProvider.otherwise('/home');
        $stateProvider
            .state('home', {
                url: '/home',
                template: require('./views/home.html'),
                controller: fullname + '.moviesController as moviesCtrl'

            })
            .state('home.movies', {
                // url: '/main',
                template: require('./views/movieList.html')

            })
            .state('movie', {
                url: '/{movieId}',
                template: require('./views/movieDescription.html'),
                controller: fullname + '.movieController as movieCtrl'
            });

    };
    configRoutes.$inject = configRoutesDeps;
    app.config(configRoutes);

    return app;
};