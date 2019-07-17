const getIconsList = (callback) => { // eslint-disable-line no-unused-vars
  $.ajax({
    url: 'vendors/js/glyph-list.json',
    method: 'get',
    dataType: `json`,
    error: function (xhr, status, error) {
      console.log(`there was an error retrieving the icons collection`)
    }
  }).then(function (dataGlyph) {
    callback(dataGlyph)
  })
}

/* This is not working for now since we need to fix the problem
 with the extended library name first.
 Leaving this commented for now so we don't forget to add this service
 ↓ ↓ ↓
 */

// const getExtendedIconsList = (callback) => {
//   $.ajax({
//     url: 'vendors/js/glyph-list-ext.json',
//     method: 'get',
//     dataType: `json`,
//     error: function (xhr, status, error) {
//       console.log(`there was an error retrieving the icons collection`)
//     }
//   })
//   .then(function (dataGlyph) {
//     callback(dataGlyph)
//   })
// }
