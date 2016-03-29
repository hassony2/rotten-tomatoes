'use strict';
var MainView = require('../views/Main.view');

describe('Main', function() {
    var mainView;
    beforeEach(function() {
        mainView = new MainView();
        //browser.ignoreSynchronization = true;
        mainView.get();
    });

    afterEach(function() {
        //browser.getLogs().then(function(logs) {console.log(JSON.stringify(logs));});
        browser.clearState();
    });

    afterAll(function(done) {
        // make sure you keep this otherwise screen shot reporter bypass the latest test
        process.nextTick(done);
    });

    it('should have a title', function() {
        // var search = 'Terminator Genisys';
        // expect(mainView.getCurrentPageTitle()).toEqual('Sample app');
        // // 1. type term in search bar
        // element(by.model('vm.search')).sendKeys('Terminator');
        // // 2. click submit
        // element(by.ngClick('vm.getMovies()')).click();

        // // 3. assert Terminator film present in list
        // expect(element(by.repeater('movie in vm.movies').row(1).column('movie.title')).getText()).toEqual(search);
        // expect(element.all(by.repeater('movie in vm.movies').column('movie.title')).filter(function(item, index) {
        //     return item.getText().then(function(text) {
        //         return text === search;
        //     });
        // }).count()).toEqual(1);

        // element.all(by.repeater('movie in vm.movies').column('movie.title')).filter(function(item, index) {
        //     return item.getText().then(function(text) {
        //         return text === search;
        //     });
        // }).first().click();
        // // 4. Click on terminatore

        // expect(element(by.binding('vm.movie.title')).getText()).toEqual(search);

        // expect(element(by.tagName('img')).isPresent()).toBe(true);
        // browser.pause();
        // // 5. Check title  is details
        // // 6. Check img present
    });

});