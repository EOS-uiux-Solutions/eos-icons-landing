/* ==========================================================================
   Extract main files from NPM packages
   ========================================================================== */

/**
 * This is a custome module to extract main files for gup to bundle and minify
 *
 * Use it by simply adding a property 'mainfiles' to your package.json
 * specifying the files you need to extract with gulp
 * example of usage:
 *
 * Package.JSON =
 *
 * {
 *   "dependencies": {
 *     "bootstrap": "^4.1.3"
 *   },
 *   "mainfiles": {
 *     "bootstrap": [
 *       "/dist/css/bootstrap.min.css",
 *       "/dist/js/bootstrap.min.js"
 *     ]
 *   }
 * }
 *
 * in gulpfile.js =
 *
 * var gulp = require('gulp'),
 *   gulpMain = require('./modules/gulp-main.js');
 *
 * gulp.task('extract', function () {
 *   return gulp.src(gulpMain('path/')) // where your node_modules and package.json are located, if they are in the root with gulpfile, leave empty
 *     .pipe(gulp.dest('build'))
 * })
 */

const fs = require('fs');

module.exports = function (path) {

  const buffer = fs.readFileSync(path + '/package.json');
  const packageJson = JSON.parse(buffer.toString());
  const packages = [];

  for (packageName in packageJson.mainfiles) {
    const mainFileFolder = path + '/node_modules/' + packageName;
    const mainfilesArray = packageJson.mainfiles[packageName];

    for (let i = 0; i < mainfilesArray.length; i++) {
      packages.push(mainFileFolder + mainfilesArray[i]);
    }
  }

  return packages;
};
