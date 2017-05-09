module.exports = function(grunt) {
    require('load-grunt-tasks')(grunt);

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
                configFile: "tests/conf.js",
                args: {
                    seleniumAddress: 'http://localhost:4444/wd/hub',
                    chromeDriver: 'node_modules/webdriver-manager/selenium/chromedriver_2.29.exe'
                }
            },
            start: {
                options: {
                    command: 'protractor tests/conf.js'
                }
            }
        },
        
        shell: {
            npm_install: {
                command: 'npm install'
            }
        }
        
    });
    
    grunt.loadNpmTasks('grunt-protractor-runner');
    grunt.loadNpmTasks('grunt-protractor-webdriver');
    grunt.loadNpmTasks('grunt-shell-spawn');
    
    grunt.registerTask('install', 'package', function () {
        grunt.task.run(['shell:npm_install'])
    });
    
    grunt.registerTask('start', 'Start the server', function () {
//        grunt.task.run(['protractor_webdriver:update', 'protractor_webdriver:start'])
        grunt.task.run(['protractor_webdriver:start'])
    });
    
    grunt.registerTask('tests', 'Run tests', function() {
        grunt.task.run(['protractor:start'])
    });
}
