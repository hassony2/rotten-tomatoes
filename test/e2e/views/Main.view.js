'use strict';

var BaseView = require('./Base.view');

class MainView extends BaseView {
    constructor() {
        super();
        this.url = '/#/search';
    }
}

module.exports = MainView;
