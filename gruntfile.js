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
          syntax: 'bootstrap',
          ligatures: true,
          normalize: true,
          types: 'woff2,woff,ttf,svg,eot',
          metadata: 'something here',
          templateOptions: {
            baseClass: "eos-icons",
            classPrefix: "eos-",
            template: 'templates/css-template.css',
            iconsStyles: false
          },
          stylesheets: ['css', 'less', 'scss'],
          destHtml: 'dist/',
          htmlDemoTemplate: 'templates/index-template.html',
          htmlDemoFilename: 'index.html'
    		}
    	}
    }
  });

  grunt.loadNpmTasks('grunt-webfont');

  grunt.registerTask('default', ['webfont']);

};
