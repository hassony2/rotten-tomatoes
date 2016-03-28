'use strict';
var servicename = 'rottenTomatoes';

module.exports = function(app) {

    var dependencies = ['$http'];

    function service($http) {
        var getMovies = function(search) {
            var url = 'http://api.rottentomatoes.com/api/public/v1.0/movies.json?q=' + search;
            return $http.jsonp(url, {
                params: {
                    apikey: '7ue5rxaj9xn4mhbmsuexug54',
                    callback: 'JSON_CALLBACK'
                }
            });
        };
        var getReviews = function(id) {
            var url = 'http://api.rottentomatoes.com/api/public/v1.0/movies/' + id + '/reviews.json?';
            return $http.jsonp(url, {
                params: {
                    apikey: '7ue5rxaj9xn4mhbmsuexug54',
                    callback: 'JSON_CALLBACK'
                }
            });
        };
        return {
            getMovies: getMovies,
            getReviews: getReviews
        };

    }
    service.$inject = dependencies;
    app.factory(app.name + '.' + servicename, service);
};