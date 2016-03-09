module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        requirejs: {
            compile: {
                options: {
                    baseUrl: "./js",
                    mainConfigFile: './js/main.js',
                    out: "../dist/js/main.min.js",
                    findNestedDependencies: true,
                    name: "main",
                    optimize: 'uglify2',
                    include: ['../bower/requirejs/require.js'],
                    uglify2: {
                        output: {
                            beautify: false
                        }
                    },
                    done: function(done, output) {

                        done();
                    }

                }
            }
        },

        replace: {
            dist: {
                src: ['../dist/index.html'], // source files array (supports minimatch)
                overwrite: true,
                replacements: [{
                    from: 'data-main="js/main.js" src="bower/requirejs/require.js"', // string replacement
                    to: 'src="js/main.min.js"'
                },
                {
                    from: 'http://192.168.2.1:9000/scss/main.scss', // string replacement
                    to: 'css/main.css'
                },
                {
                    from: 'http://192.168.1.35:9000/scss/main.scss', // string replacement
                    to: 'css/main.css'
                }]

            },

        },

        rsync: {
            options: {
                args: ['--verbose'],
                exclude: ['.git*','scss','tools','node_modules','*.json','.DS_Store','doc','bower', '.sass-cache','*.js', 'js/*'],
                include:['js/position-worker.js'],
                recursive: true
            },
            dist: {
                options: {
                    src: './',
                    dest: '../dist'
                }
            },

        },
        browserSync: {
            dev: {
                bsFiles: {
                    src : [
                        'scss/*/*',
                        'scss/*',
                        '*.html',
                        'js/*',
                        'js/*/*',
                    ]
                },
                options: {

                    server: ".",
                    port:1337

                    //,
                    //port:80
                   // port:
                }

            }
        }
    });


    grunt.loadNpmTasks('grunt-contrib-requirejs');
    grunt.loadNpmTasks('grunt-text-replace');
    grunt.loadNpmTasks('grunt-rsync');
    grunt.loadNpmTasks('grunt-browser-sync');


    grunt.registerTask('sass', 'Compile Sass', function() {
        var done = this.async();
        var devServer = require('sass-dev-server');
        var render = devServer.render;

        var file = 'scss/main.scss';
        var out = 'css/main.css';

        render(file, out).then(function(path) {
            console.log('rendered to %s', path);
            return done();
        });
    });


    grunt.registerTask('sync', ['browserSync']);
    grunt.registerTask('build', ['sass', 'rsync:dist', 'requirejs','replace:dist']);

    // grunt.registerTask('watch', ['watch'])

};