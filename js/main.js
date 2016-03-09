requirejs.config({
    paths: {
        'jquery': '../bower/jquery/jquery.min'
    },
    shim: {
        'bootstrap': {
            deps: ['jquery']
        }
    }
});

require(['bootstrap'], function(bootstrap) {
    bootstrap();
});