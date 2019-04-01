module.exports = function (grunt) {
  const sass = require('node-sass');

  grunt.initConfig({
    webfont: {
      icons: {
        src: src_eos_set,
        dest: 'dist/fonts',
        destCss: 'dist/css',
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
      },
      iconsExtended: {
        src: src_extended_set,
        dest: 'dist/extended/fonts',
        destCss: 'dist/extended/css',
        options: {
          font: 'eos-icons-extended',
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
          destHtml: 'dist/extended/',
          htmlDemoTemplate: 'templates/index-template-extended.html',
          htmlDemoFilename: 'index',
          customOutputs: [{
            template: 'templates/glyph-list-template.json',
            dest: 'dist/extended/js/glyph-list.json'
          }]
        }
      }
    },
    copy: {
      logo: {
        files: [
          { src: 'templates/logo.png', dest: 'dist/images/', flatten: true, expand:true },
          { src: 'templates/logo.png', dest: 'dist/extended/images/', flatten: true, expand:true }
        ]
      },
      css: {
        files: [
          { src: 'templates/index.css', dest: 'dist/css/', flatten: true, expand:true },
          { src: 'templates/index.css', dest: 'dist/extended/css/', flatten: true, expand:true }
        ]
      },
      material: {
        files: [{
          expand: true,
          dot: true,
          cwd: 'node_modules/material-design-icons',
          dest: 'svg/extended/',
          filter: 'isFile',
          flatten: true,
          src: '{,*/}*/svg/production/*{,*/}_24px.svg',
          rename: function (dest, src) {
            return dest + src.replace('_24px', '').replace('ic_', '');
          }
        }]
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
    },
    replace: {
      replace_metadata: {
        src: ['dist/fonts/eos-icons.svg', 'dist/extended/fonts/eos-icons-extended.svg'],
        overwrite: true,
        replacements: [{
          from: /<metadata>(.|\n)*?<\/metadata>/,
          to: "<metadata>Created by EOS Design System</metadata>"
        }]
      }
    },
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
    grunt.file.write(projectFile, JSON.stringify(project, null, 2));
  });

  grunt.loadNpmTasks('grunt-webfont');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-text-replace');

  grunt.registerTask('default', ['copy:material', 'sass', 'concat', 'webfont', 'copy:logo', 'copy:css', 'replace', 'addanimated']);

};
