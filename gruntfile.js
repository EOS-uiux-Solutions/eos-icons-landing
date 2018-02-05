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
          version: '1.0.0',
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
          stylesheets: ['css'],
          destHtml: 'dist/',
          htmlDemoTemplate: 'templates/index-template.html',
          htmlDemoFilename: 'index',
          customOutputs: [{
            template: 'templates/glyph-list-template.json',
				    dest: 'dist/js/glyph-list.json'
          }]
    		}
    	}
    },
    copy: {
      logo: {
        files: [
          { src: 'templates/logo.png', dest: 'dist/images/' }
        ]
      }
    }
  });

  grunt.loadNpmTasks('grunt-webfont');
  grunt.loadNpmTasks('grunt-contrib-copy');

  grunt.registerTask('default', ['webfont','copy']);

};
