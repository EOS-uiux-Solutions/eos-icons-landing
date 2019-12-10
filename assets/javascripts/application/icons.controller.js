$(document).on('ready', function () {
  /* Only run the functions when we need to display / filter the icons. */
  if ($('.js-icons-list').length > 0 || $('.js-extended-icons-list').length > 0) {
    eosIconsDisplay()
    extendedIconsListData()
    searchIcon()
  }
})

const eosIconsDisplay = async () => {
  const $iconsContainer = $('.js-icons-list')
  const $iconDisplayTemplate = $('.js-icons-item').clone(true)
  $('.js-icons-item').remove()

  try {
    /* Gets the icon list */
    const icons = await getIconsList() // eslint-disable-line no-undef
    /* Gets the tags */
    const iconsTag = await getIconsTagsFromEos() // eslint-disable-line no-undef

    /* Reduce the array to an object with icon-name as key, and tags as props:  'admin': { tags: [...] } */
    const reduceTags = iconsTag.reduce((acc, cur) => {
      acc[cur.name] = {
        tags: cur.tags
      }

      return acc
    }, {})

    const { glyphs } = icons

    for (let i = 0; i < glyphs.length; i++) {
      const newIconDisplay = $iconDisplayTemplate.clone(true)
      const iconName = glyphs[i]

      // Add icon name
      $(newIconDisplay).attr('data-name', iconName)
      $(newIconDisplay).find('.js-eos-icons').attr('data-tags', reduceTags[iconName].tags)
      $(newIconDisplay).find('.js-eos-icons').text(iconName).addClass(`eos-icon-${iconName}`)
      $(newIconDisplay).find('.js-eos-icon-name').text(iconName)
      $($iconsContainer).append(newIconDisplay)
    }
  } catch (error) {
    console.log(error)
  }
}

const extendedIconsListData = async () => {
  const $iconsContainer = $('.js-extended-icons-list')
  const $iconDisplayTemplate = $('.js-extended-icons-item').clone(true)
  $('.js-extended-icons-item').remove()

  try {
    const icons = await getExtendedIconsList() // eslint-disable-line no-undef
    const { glyphs } = icons

    for (let i = 0; i < glyphs.length; i++) {
      const newIconDisplay = $iconDisplayTemplate.clone(true)
      const iconName = glyphs[i]

      // Add icon name
      $(newIconDisplay).attr('data-name', iconName)
      $(newIconDisplay).find('.js-eos-icons').text(iconName).addClass(`eos-icon-${iconName}`)
      $(newIconDisplay).find('.js-eos-icon-name').text(iconName)
      $($iconsContainer).append(newIconDisplay)
    }
  } catch (error) {
    console.log(error)
  }
}

const searchIcon = () => { // eslint-disable-line no-unused-vars
  const input = $('.searchbar')[0].value
  const x = $('.icons-item')

  for (let i = 0; i < x.length; i++) {
    const item = x[i].getElementsByClassName('eos-icons')[0]
    const itemTags = $(item).data('tags')

    if (!(item.innerHTML.includes(input) || (itemTags !== undefined && itemTags.includes(input)))) {
      x[i].style.display = 'none'
    } else {
      x[i].style.display = 'inline-block'
    }
  }
}
