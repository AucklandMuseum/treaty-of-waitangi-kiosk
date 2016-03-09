{
    mainConfigFile: '../javascripts/main.js',
    out: "../javascripts/main.min.js",
    findNestedDependencies: true,
    name: "../javascripts/main",
    optimize: 'uglify2',
    uglify2: {
            //Example of a specialized config. If you are fine
            //with the default options, no need to specify
            //any of these properties.
            output: {
                beautify: false
            }
        }
}