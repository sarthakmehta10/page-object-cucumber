module.exports = function(grunt) {
    require('load-grunt-tasks')(grunt);
    
    var browser = grunt.option('browser');

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        
        protractor_webdriver: {
            options: {
                path: 'node_modules/webdriver-manager/bin/',
                keepAlive: true
            },
            update: {
                options: {
                    command: 'webdriver-manager update'
                }
            },
            start: {
                options: {
                    command: 'webdriver-manager start'
                }
            }
        },
        
        protractor: {
            options: {
                keepAlive: true,
            },
            start: {
                configFile: "tests/conf.js",
                args: {
                    seleniumAddress: 'http://localhost:4444/wd/hub',
                }
            }
        },
        
        shell: {
            protractor_install: {
                command: 'node node_modules/webdriver-manager/bin/webdriver-manager update'
            }
        }
        
    });
    
    grunt.loadNpmTasks('grunt-protractor-runner');
    grunt.loadNpmTasks('grunt-protractor-webdriver');
    grunt.loadNpmTasks('grunt-shell-spawn');
    
    grunt.registerTask('default', 'default task', function (target) {
        process.env.BROWSER = browser || 'chrome';
        grunt.task.run(['protractor_webdriver:start', 'protractor:' + target])
    });
}
