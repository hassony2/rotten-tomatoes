'use strict';

var DetailsView = require('../views/Details.View');

describe('Details page', function() {
    var detailsView;
    beforeEach(function() {
        detailsView = new DetailsView();
        detailsView.get();
    });
    afterEach(function() {
        browser.clearState;
    });

    afterAll(function(done) {
        process.nextTick(done);
    });
    // it('should have the right elements', function() {
    //     expect(detailsView.movieTitle().isPresent()).toBe(true);
    //     expect(detailsView.movieTitle().getText()).toEqual('');
    //     expect(detailsView.pageTitle().getText()).toEqual('Details');
    //     //browser.pause();
    // });

});
