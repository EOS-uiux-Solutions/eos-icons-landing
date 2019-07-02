(function () {
  let showCodeSnippet = false // eslint-disable-line no-unused-vars
  let iconName, iconSize, iconDemo, iconClass

  // hide code snippet by default
  document.getElementsByClassName('how-to-use')[0].style.visibility = 'hidden'
  document.getElementsByClassName('how-to-use-animated')[0].style.visibility = 'hidden'

  document.getElementById('icons').onclick = function (e) {
    e = e || window.event
    iconName = e.target.getAttribute('data-name') || e.target.parentNode.getAttribute('data-name')
    document.getElementById('eos-icon-name').innerHTML = iconName

    if (iconName) {
      showCodeSnippet = true
      document.getElementsByClassName('how-to-use')[0].style.visibility = 'visible'
      document.getElementsByClassName('how-to-use-animated')[0].style.visibility = 'hidden'
    }
  }

  document.getElementById('icons-animated').onclick = function (e) {
    e = e || window.event
    iconName = e.target.getAttribute('data-name') || e.target.parentNode.getAttribute('data-name')

    if (iconName) {
      showCodeSnippet = true
      iconDemo = `<pre><code>i class=&quoteos-icons eos-icon-${iconName} ${iconName} ></code></pre>`
      document.getElementsByClassName('how-to-use-animated')[0].style.visibility = 'visible'
    }
    document.getElementById('animatedIconDemo').innerHTML = iconDemo
  }

  document.getElementById('close-code-snippet').onclick = function (e) {
    showCodeSnippet = false
    iconName = ''
    document.getElementsByClassName('how-to-use')[0].style.visibility = 'hidden'
    document.getElementsByClassName('how-to-use-animated')[0].style.visibility = 'hidden'
  }

  document.getElementById('close-code-snippet-animated').onclick = function (e) {
    showCodeSnippet = false
    iconName = ''
    document.getElementsByClassName('how-to-use-animated')[0].style.visibility = 'hidden'
    document.getElementsByClassName('how-to-use')[0].style.visibility = 'hidden'
  }

  const buttonsSizes = document.getElementsByClassName('change-size')
  for (let i = 0; i < buttonsSizes.length; i++) {
    buttonsSizes[i].onclick = function (e) {
      e = e || window.event
      iconSize = e.target.getAttribute('data-size')
      iconClass = `md-${iconSize}`
      for (i = 0; i < document.getElementsByClassName('eos-icons').length; i++) {
        document.getElementsByClassName('eos-icons')[i].style.fontSize = `${iconSize}px`
        document.getElementById('eos-icon-installing').className = `eos-icons eos-icon-installing${iconClass}`
      }
    }
  }

  const $iconsContainer = $('.js-icons-list')
  const $iconDisplayTemplate = $('.js-icons-item').clone(true)
  $('.js-icons-item').remove()

  const iconsListData = () => {
    getIconsList(function (data) { // eslint-disable-line
      const iconsList = data.glyphs

      for (let i = 0; i < iconsList.length; i++) {
        const newIconDisplay = $iconDisplayTemplate.clone(true)
        const iconName = iconsList[i]

        // Add icon name
        $(newIconDisplay).attr('data-name', iconName)
        $(newIconDisplay).find('.js-eos-icons').text(iconName).addClass(`eos-icon-${iconName}`)
        $(newIconDisplay).find('.js-eos-icon-name').text(iconName)

        $($iconsContainer).append(newIconDisplay)
      }
    })
  }

  iconsListData()
})()

const searchIcon = () => { // eslint-disable-line no-unused-vars
  input = document.getElementsByClassName('searchbar')[0].value // eslint-disable-line
  const x = document.getElementsByClassName('icons-item')
  for (i = 0; i < x.length; i++) { // eslint-disable-line no-undef
    if (!(x[i].getElementsByClassName('eos-icons')[0].innerHTML.includes(input))) { // eslint-disable-line no-undef
      x[i].style.display = 'none' // eslint-disable-line no-undef
    } // eslint-disable-line brace-style
    else {
      x[i].style.display = 'inline-block' // eslint-disable-line no-undef
    }
  }
}
