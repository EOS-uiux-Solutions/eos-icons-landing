module.exports = function (grunt) {
  const sass = require('node-sass');

  grunt.initConfig({
    copy: {
      logo: {
        files: [
          { src: 'views/logo.png', dest: 'dist/images/', flatten: true, expand:true },
          { src: 'views/logo.png', dest: 'dist/extended/images/', flatten: true, expand:true }
        ]
      },
      css: {
        files: [
          { src: 'views/index.css', dest: 'dist/css/', flatten: true, expand:true },
          { src: 'views/index.css', dest: 'dist/extended/css/', flatten: true, expand:true }
        ]
      },
      html: {
        files: [
          { src: 'views/index.html', dest: 'dist/', flatten: true, expand:true },
          { src: 'views/extended.html', dest: 'dist/extended/', flatten: true, expand:true }
        ]
      },
      js: {
        files: [
          { src: 'js/app.js', dest: 'dist/js/', flatten: true, expand:true },
          { src: 'js/get-icons.service.js', dest: 'dist/js/', flatten: true, expand:true },
          { src: 'js/app.js', dest: 'dist/extended/js/', flatten: true, expand:true },
          { src: 'js/get-icons-extended.service.js', dest: 'dist/extended/js/', flatten: true, expand:true },
          { src: 'node_modules/jquery/dist/jquery.min.js', dest: 'dist/vendors/js/', flatten: true, expand:true },
          { src: 'node_modules/eos-icons/dist/js/glyph-list.json', dest: 'dist/js/', flatten: true, expand:true },
          { src: 'node_modules/eos-icons/dist/extended/js/glyph-list.json', dest: 'dist/extended/js/', flatten: true, expand:true }
        ]
      },
      dist: {
        files: [
        { expand: true, cwd: 'node_modules/eos-icons/dist',
          src: '**', 
          dest: 'dist/vendors/dist'
          }]
      },
    },
    rename: {
      main: {
        files: [
          { src: 'dist/extended/extended.html', dest: 'dist/extended/index.html' }
        ]
      }
    },
    sasslint: {
      options: {
        configFile: 'tests/.sass-lint.yml',
      },
      target: ['scss/**/*.scss']
    },
    sass: {
      options: {
        implementation: sass
      },
      dist: {
        files: {
          'views/index.css': 'scss/index.scss'
        }
      }
    },
    eslint: {
      options: {
        configFile: 'tests/.eslintrc.yml',
      },
      target: ['js/app.js']
    }
  });

  grunt.loadNpmTasks('grunt-webfont');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-sass-lint');
  grunt.loadNpmTasks('grunt-eslint');
  grunt.loadNpmTasks('grunt-contrib-rename');

  grunt.registerTask('default', ['sasslint', 'sass', 'eslint', 'copy:html', 'rename:main', 'copy:dist', 'copy:logo', 'copy:css', 'copy:js']);

};
