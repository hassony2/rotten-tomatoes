'use strict';
var servicename = 'moviesFetcher';

module.exports = function(app) {

    var dependencies = ['$http', '$log'];

    function service($http, $log) {
        var movieList = {};
        var getMovies = function(searchString) {

            var url = 'http://api.rottentomatoes.com/api/public/v1.0/movies.json?q=' + searchString;
            return $http.jsonp(url, {
                    params: {
                        apikey: '7ue5rxaj9xn4mhbmsuexug54',
                        callback: 'JSON_CALLBACK'
                    }
                })
                .then(function(response) {
                    movieList.list = response.data.movies;

                });

        };

        return {
            getMovies: getMovies,
            movieList: movieList
        };

    }
    service.$inject = dependencies;
    app.factory(app.name + '.' + servicename, service);
};