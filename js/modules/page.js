define(function(require){
    'use strict'

    var hist = require('modules/history');

    var page = function (pageName){

        this.init = function (){
            hist.register(pageName, this);
        }

    };

    return page;
});