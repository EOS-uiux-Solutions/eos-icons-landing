module.exports = function(grunt) {
  const sass = require('node-sass');

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
          normalize: false,
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
    },
    sass: {
      options: {
        implementation: sass
      },
      dist: {
        files: {
          'templates/css-animated.css': 'animated/scss/index.scss'
        }
      }
    },
    concat: {
      dist: {
        src: ['templates/css-webfont.css', 'templates/css-animated.css'],
        dest: 'templates/css-template.css',
      },
    }
  });

  grunt.loadNpmTasks('grunt-webfont');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-concat');

  grunt.registerTask('default', ['webfont','copy','sass','concat']);

};
