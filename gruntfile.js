'use strict'; 

module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		less: {
			production: {
				options: {
					cleancss: true,
					compress: false,
				},
				files: 
					{"dist/css/jaychan.css" : "src/less/main.less"}
			}
		},
		htmlhint: {
			templates: {
				options: {
					'attr-lower-case': true
				},
				src:['dist/*.html']
			}
		},
		concat: {
			js: {
				src: [
					'src/js/vendor/jquery.bxslider.min.js',
					'src/js/vendor/jquery.easing.min.js',
					'src/js/vendor/isotope.pkgd.min.js',
					'src/js/vendor/jquery.fancybox.pack.js',
					'src/js/vendor-debug.js',
					'src/js/jaychan.js'
				],
				dest: 'dist/js/jaychan.js'
			}
		},
		watch: {
			less: {
				files: 'src/less/*.less',
				tasks: ['less:production']
			},
			js: {
				files: 'src/js/*.js',
				tasks: ['concat:js']
			}
		}
	});

	//load the devDependancies tasks
	require('load-grunt-tasks')(grunt, {scope: 'devDependencies'});

	// create entry points
	grunt.registerTask("default", ['less:production', 'concat:js', 'htmlhint']);
	grunt.registerTask("hint", ['htmlhint']);
};