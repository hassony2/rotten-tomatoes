'use strict';

var SearchView = require('../views/Search.view');
var DetailsView = require('../views/Details.view');

describe('Search', function() {
    var searchView;
    var detailsView;
    beforeEach(function() {
        searchView = new SearchView();
        searchView.get();
        detailsView = new DetailsView();
    });

    afterEach(function() {
        browser.clearState();
    });

    afterAll(function(done) {
        process.nextTick(done);
    });
    it('should find Terminator Genesis Movie', function() {

        var searchKeys = 'Terminator Genisys';

        searchView.searchField().sendKeys(searchKeys);
        searchView.searchButton().click();

        expect(searchView.searchResult(searchKeys).count()).toEqual(1);

        searchView.searchResult(searchKeys).click();

        expect(detailsView.image().isPresent()).toBe(true);
        expect(detailsView.movieTitle().getText()).toEqual(searchKeys);

    });
});
