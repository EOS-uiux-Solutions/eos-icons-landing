module.exports = function (grunt) {
  const sass = require('node-sass');

  //Append path to your svg below
  //EOS-set svg path
  const src_eos_set=['svg/*.svg'];
  //Extended set svg path
  const src_extended_set=['svg/*.svg', 'svg/extended/*.svg'];

  grunt.initConfig({
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
      js: {
        files: [
          { src: 'js/app.js', dest: 'dist/js/', flatten: true, expand:true },
          { src: 'js/app.js', dest: 'dist/extended/js/', flatten: true, expand:true }
        ]
      },
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
          'templates/sass-compiled.css': 'scss/index.scss'
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

  grunt.registerTask('default', ['sasslint', 'sass', 'eslint', 'copy:logo', 'copy:css', 'copy:js']);

};
