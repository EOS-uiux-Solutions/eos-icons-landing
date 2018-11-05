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

  /**
   * Add animated icons objects in the exported collection
   *
   * Since we only have 2 animated icons, we will manually add the animated icons
   * to the glyph list json
   *
   * This will allow us to consume them in EOS
   */

  grunt.registerTask('addanimated', function (key, value) {
    var projectFile = "./dist/js/glyph-list.json";
    // get file as json object
    var project = grunt.file.readJSON(projectFile);
    var animatedIconsArray = ['loading', 'installing'];

    //edit the value of json object
    project.animatedIcons = animatedIconsArray;

    //serialize it back to file
    grunt.file.write(projectFile, JSON.stringify(project, null,2));

  });

  grunt.loadNpmTasks('grunt-webfont');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-concat');

  grunt.registerTask('default', ['sass','concat','webfont','copy','addanimated']);

};
