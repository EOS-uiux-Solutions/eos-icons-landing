module.exports = function(grunt) {

  grunt.initConfig({
    webfont: {
    	icons: {
    		src: 'svg/*.svg',
    		dest: 'dist/fonts',
    		destCss: 'dist/css',
        destScss: 'dist/scss',
        destLess: 'dist/less',
    		options: {
    			font: 'eos-icons',
          ligatures: true,
          normalize: true,
          types: 'woff2,woff,ttf,svg,eot',
          metadata: 'something here',
          templateOptions: {
            "baseClass": "eos",
            "classPrefix": "eos_"
          },
          stylesheets: ['less', 'scss', 'css'],
          destHtml: 'dist/',
          htmlDemoFilename: 'index.html'
    		}
    	}
    }
  });

  grunt.loadNpmTasks('grunt-webfont');

  grunt.registerTask('default', ['webfont']);

};
