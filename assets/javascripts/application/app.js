$(document).on('ready', function () {
  let showCodeSnippet = false // eslint-disable-line no-unused-vars
  let iconName, iconSize, iconDemo, iconClass

  // hide code snippet by default
  $('.how-to-use').css('visibility', 'hidden')
  $('.how-to-use-animated').css('visibility', 'hidden')

  $('#icons').on('click', function (e) {
    e = e || window.event
    iconName = e.target.getAttribute('data-name') || e.target.parentNode.getAttribute('data-name')
    $('#eos-icon-name').html(iconName)

    if (iconName) {
      showCodeSnippet = true
      $('.how-to-use').css('visibility', 'visible')
      $('.how-to-use-animated').css('visibility', 'hidden')
    }
  })

  $('#extended-icons').on('click', function (e) {
    e = e || window.event
    iconName = e.target.getAttribute('data-name') || e.target.parentNode.getAttribute('data-name')
    $('#eos-icon-name').html(iconName)

    if (iconName) {
      showCodeSnippet = true
      $('.how-to-use').css('visibility', 'visible')
      $('.how-to-use-animated').css('visibility', 'hidden')
    }
  })

  $('#icons-animated').on('click', function (e) {
    e = e || window.event
    iconName = e.target.getAttribute('data-name') || e.target.parentNode.getAttribute('data-name')

    if (iconName) {
      showCodeSnippet = true
      iconDemo = `<pre><code>&lt;i class=&quoteos-icons eos-icon-${iconName}"> &lt;/i&gt; </code></pre>`
      $('.how-to-use-animated').css('visibility', 'visible')
    }
    $('#animatedIconDemo').html(iconDemo)
  })

  $('#close-code-snippet').on('click', function (e) {
    showCodeSnippet = false
    iconName = ''
    $('.how-to-use').css('visibility', 'hidden')
    $('.how-to-use-animated').css('visibility', 'hidden')
  })

  $('#close-code-snippet-animated').on('click', function (e) {
    showCodeSnippet = false
    iconName = ''
    $('.how-to-use').css('visibility', 'hidden')
    $('.how-to-use-animated').css('visibility', 'hidden')
  })

  const buttonsSizes = $('.change-size')
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
})
