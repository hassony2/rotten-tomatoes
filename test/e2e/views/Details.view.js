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

    title() {
        return element(by.binding('vm.movie.title'));
    }
}

module.exports = DetailsView;
