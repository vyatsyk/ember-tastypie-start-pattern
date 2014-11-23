// TODO Clean unminified files
module.exports = function (grunt) {
    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        concat: {
            options: {
                separator: '\n'
            },
            js: {
                src: ['js/**/*.js'],
                dest: 'prod/app.js'
            }
        },
        emberTemplates: {
			compile: {
				options: {
					templateBasePath: /templates/
				},
				files: {
					'js/ember-temp.js': 'templates/**/*.hbs'
				}
			}

		},
        watch: {
            options: {
                livereload: true
            },
            js: { files: ['js/**/*'],
                tasks: ['concat']
            },
            ember: {
                files: ['templates/**/*.hbs'],
                tasks: ['emberTemplates', 'concat']
            }
        },
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-ember-templates');
    grunt.registerTask('default', ['emberTemplates', 'concat', 'watch']);
};