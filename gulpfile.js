/* ==========================================================================
   Gulp - Builder manager for the Front-end
   ========================================================================== */

/* Configuration variables
   ========================================================================== */

/* Set dependencies required for the tasks */
const gulp = require('gulp'),
  concat = require('gulp-concat'),
  filter = require('gulp-filter'),
  rename = require('gulp-rename'),
  gulpMain = require('./modules/gulp-main.js'),
  clean = require('gulp-clean'),
  minify = require('gulp-minify'),
  cleanCSS = require('gulp-clean-css'),
  { series, parallel } = require('gulp'),
  pug = require('gulp-pug')
  remoteSrc = require('gulp-remote-src')

/* Landing page destination */

const distFolder = 'dist/'
const destinationVendors = `${distFolder}vendors/`
const landingOrigin = 'vendors/'

/* Set the filters */
const jsFilter = filter('**/*.js'),
  cssFilter = filter('**/*.css'),
  jsonFilter = filter('**/*.json'),
  /* we need to filter out MD fonts as it will have its own filter */
  fontFilter = filter(['**/*.{otf,eot,svg,ttf,woff,woff2}', '!**/MaterialIcons-Regular.{otf,eot,svg,ttf,woff,woff2}'], { restore: true }),
  mdIconsFilter = filter('**/MaterialIcons-Regular.{otf,eot,svg,ttf,woff,woff2}')


/* Extract files for landing vendors.
  ========================================================================== */
/* Clean the built folder to start a fresh building */
const cleanVendors =  () => {
  return gulp.src(destinationVendors, { read: false, allowEmpty: true } )
    .pipe(clean())
}

/* Extract all css files declared in the mainfiles object */
const extractLandingVendorsCss = () => {
  return gulp.src(gulpMain(landingOrigin), { allowEmpty: true })
    .pipe(cssFilter)
    .pipe(concat('vendors.css'))
    .pipe(cleanCSS())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest(`${destinationVendors}css`))
}

/* Extract all js files declared in the mainfiles object */
const extractLandingVendorsJs = () => {
  return gulp.src(gulpMain(landingOrigin), { allowEmpty: true })
    .pipe(jsFilter)
    .pipe(concat('vendors.js'))
    .pipe(minify({ext:{
        min:'.min.js'
      }}))
    .pipe(gulp.dest(`${destinationVendors}js`))
}

/* Extract all font files declared in the mainfiles object */
const extractLandingFonts = () => {
  return gulp.src(gulpMain(landingOrigin), { allowEmpty: true })
    .pipe(fontFilter)
    .pipe(gulp.dest(`${destinationVendors}fonts`)) // move all fonts, except for MD icons to the /fonts folder as required by the default configuration
    .pipe(fontFilter.restore)
    .pipe(mdIconsFilter)
    .pipe(gulp.dest(`${destinationVendors}css`)) // Material icons .css file is configured to have the css and fonts in the same folder
}

/* Extract all Json files declared in the mainfiles object */
const extractVendorJson = () => {
  return gulp.src(gulpMain(landingOrigin), { allowEmpty: true })
    .pipe(jsonFilter)
    .pipe(gulp.dest(`${destinationVendors}js`))
}

/* Converte pug to HTML */
const pugToHtml = () => {
  return gulp.src('./views/pages/*.pug')
  .pipe(pug({
    doctype: 'html',
    pretty: false
  }))
  .pipe(gulp.dest(`${distFolder}`));
}

/* Move assets from assets to static folder */
const moveMultimedia = () => {
  return gulp.src('./assets/images/**/*')
  .pipe(gulp.dest(`${distFolder}assets/images/`));
}

/* Move Json files from assets/js to static folder */
// TODO: this is a workaround until eos-icons delivers the extended glyph list
// with a different name
const moveJson = () => {
  return gulp.src('./assets/javascripts/application/*')
  .pipe(jsonFilter)
  .pipe(gulp.dest(`${destinationVendors}js/`));
}

const getIconsTagsFromEos = () => {
  return gulp.src('./vendors/node_modules/eos-icons/dist/js/eos-icons.json')
  .pipe(gulp.dest(`${destinationVendors}js/`));
}

/* Configure the default gulp task and one for the landing page
   ========================================================================== */
/** Tasks exported for individual use **/

// cleanup the Vendor folder before building it
exports.cleanVendors = cleanVendors
// extract vendor files defined under vendors/package.json {mainfiles}
exports.extractLandingVendorsCss = extractLandingVendorsCss
exports.extractLandingVendorsJs = extractLandingVendorsJs
exports.extractLandingFonts = extractLandingFonts
exports.extractVendorJson = extractVendorJson
// build the static html and move media
exports.pugToHtml = pugToHtml
exports.moveMultimedia = moveMultimedia
exports.moveJson = moveJson

exports.buildVendors =
  series(cleanVendors,
    parallel(
      extractLandingVendorsCss,
      extractLandingVendorsJs,
      extractLandingFonts,
      extractVendorJson,
      getIconsTagsFromEos
    ))
