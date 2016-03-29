'use strict';

var BaseView = require('./Base.view');

class SearchView extends BaseView {
    constructor() {
        super();
        this.url = '/#/search';
    }

    searchField() {
        return element(by.model('vm.search'));
    }
    searchButton() {
        return element(by.ngClick('vm.getMovies()'));
    }
    moviesList() {
        return element.all(by.repeater('movie in vm.movies').column('movie.title'));
    }

    searchResult(searchString) {
        return this.moviesList().filter(function(item, index) {
            return item.getText().then(function(text) {
                return text === searchString;
            });
        });
    }

}

module.exports = SearchView;
