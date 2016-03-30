'use strict';

var BaseView = require('./Base.view');

class DetailsView extends BaseView {
    constructor() {
        super();
        this.url = '/#/details';
    }
    image() {
        return element(by.tagName('img'));
    }

    movieTitle() {
        return element.all(by.css('ion-header-bar')).all(by.binding('vm.movie.title')).first();

    }
    pageTitle() {
        return $('ion-header-bar');
    }
}

module.exports = DetailsView;
