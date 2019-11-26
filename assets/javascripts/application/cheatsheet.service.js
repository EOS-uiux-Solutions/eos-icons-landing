// const getIconsList = (callback) => { // eslint-disable-line no-unused-vars
//   $.ajax({
//     url: 'vendors/js/glyph-list.json',
//     method: 'get',
//     dataType: 'json',
//     error: function (xhr, status, error) {
//       console.log(`there was an error retrieving the icons collection`)
//     }
//   })
//     .then(function (dataGlyph) {
//       callback(dataGlyph)
//     })
// }

const getIconsList = async () => {
  try {
    const r = await fetch('vendors/js/glyph-list.json')
    const data = await r.json()
  
    return data
  } catch (error) {
    console.log(error)
  }
  
}

const getIconsTagsFromEos = callback => {
  $.ajax({
    url: 'vendors/js/eos-set',
    method: 'get',
    dataType: 'json',
    error: (xhr, status, error) => {
      console.log(`ERROR: getIconsTagsFromEos() => ${error}`)
    }
  })
  .then(data => {
    callback(data)
  })
}
/*
  TODO: The code below is reading a manually copied file from the eos-icons package
  that needed to be manually renamed to glyph-list-extended.
  Once eos-icons releases a new package and changes the name of that glyph list
  we need to read the file from the vendors, like in the service above.
 */

const getExtendedIconsList = (callback) => { // eslint-disable-line no-unused-vars
  $.ajax({
    url: 'vendors/js/glyph-list-extended.json',
    method: 'get',
    dataType: `json`,
    error: function (xhr, status, error) {
      console.log(`there was an error retrieving the icons collection`)
    }
  })
    .then(function (dataGlyph) {
      callback(dataGlyph)
    })
}
