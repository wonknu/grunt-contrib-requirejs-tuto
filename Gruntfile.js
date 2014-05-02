module.exports = function(grunt) {
	
	// require taks config
	grunt.initConfig({
        requirejs: {
          compile: {
            options: {
              baseUrl: "./",
              out: "production.min.js", // output file
              optimize: 'uglify2', // optimise js code
              include: [ // files to concatenate and minify
                "bower_components/requirejs/require.js",
                "js/main",
                "js/component_1/Component",
                "js/component_2/Component"
              ],
            }
          }
        }
	});
	
	// Load task
    grunt.loadNpmTasks('grunt-contrib-requirejs');
};