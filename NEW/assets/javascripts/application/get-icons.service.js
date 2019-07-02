const getIconsList = (callback) => { 
  $.ajax({
    url: 'js/glyph-list.json',
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