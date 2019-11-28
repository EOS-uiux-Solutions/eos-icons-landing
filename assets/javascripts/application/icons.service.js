const getIconsList = async () => { // eslint-disable-line no-unused-vars
  try {
    const icons = await window.fetch('vendors/js/glyph-list.json')
    return await icons.json()
  } catch (error) {
    console.log(error)
  }
}

const getIconsTagsFromEos = async () => { // eslint-disable-line no-unused-vars
  try {
    const icons = await window.fetch('vendors/js/eos-set.json')
    return await icons.json()
  } catch (error) {
    console.log(error)
  }
}
/*
  TODO: The code below is reading a manually copied file from the eos-icons package
  that needed to be manually renamed to glyph-list-extended.
  Once eos-icons releases a new package and changes the name of that glyph list
  we need to read the file from the vendors, like in the service above.
 */
const getExtendedIconsList = async () => { // eslint-disable-line no-unused-vars
  try {
    const icons = await window.fetch('vendors/js/glyph-list-extended.json')
    return await icons.json()
  } catch (error) {
    console.log(error)
  }
}
