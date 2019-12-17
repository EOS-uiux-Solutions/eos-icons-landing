$(document).on('ready', function () {
  let iconName, iconSize, iconClass, value, copy

  function changeValueIcons () {
    $('.tags').text('')

    const iconTags = $(`.eos-icon-${iconName}`).data('tags')
    copy = $('#copy3')
    value = `<i class='eos-icons'> ${iconName}</i>`
    copy.val(value)

    /* Only render the tags if exists */
    if (iconTags !== undefined) {
      $('.tags').html(iconTags.split(',').map(ele => `<span class='badge badge-secondary'> ${ele} </span>`))
    }
  }

  function changeValueAnimated () {
    copy = $('#copy4')
    value = `<img src='${iconName}.svg' />`
    const downloadURL = `https://gitlab.com/SUSE-UIUX/eos-icons/raw/master/animated-svg/${iconName}.svg?inline=false`
    $('.js-download-animated-icon').attr('href', downloadURL)
    copy.val(value)
  }

  $('#copy1, #copy2').on('click', function () {
    copy.select()
    document.execCommand('copy')
  })

  const currentLink = window.location.pathname.split('/')
  const currentPage = currentLink[currentLink.length - 1]
  const page = {
    '': 0,
    'index.html': 0,
    'cheatsheet.html': 1,
    'icons-picker.html': 2,
    'docs.html': 3
  }
  const navLink = $('.current')
  navLink.removeClass('active')
  navLink[page[currentPage]].classList.add('active')

  // hide code snippet by default
  $('.how-to-use').css('visibility', 'hidden')
  $('.how-to-use-animated').css('visibility', 'hidden')

  $('.js-icons-item').on('click', function (e) {
    e = e || window.event
    iconName = e.target.getAttribute('data-name') || e.target.parentNode.getAttribute('data-name')
    $('.js-icons-item').removeClass('icons-item-selected')
    $(this).addClass('icons-item-selected')

    if (iconName) {
      changeValueIcons()
      $('.how-to-use').css('visibility', 'visible')
      $('.how-to-use-animated').css('visibility', 'hidden')
    }
  })

  $('#extended-icons').on('click', function (e) {
    e = e || window.event
    iconName = e.target.getAttribute('data-name') || e.target.parentNode.getAttribute('data-name')

    if (iconName) {
      changeValueIcons()
      $('.how-to-use').css('visibility', 'visible')
      $('.how-to-use-animated').css('visibility', 'hidden')
    }
  })

  $('.js-animated-icon-info').on('click', function (e) {
    e = e || window.event
    iconName = e.target.getAttribute('data-name') || e.target.parentNode.getAttribute('data-name')
    $('.js-animated-icon-info').removeClass('icons-item-selected')
    $(this).addClass('icons-item-selected')

    if (iconName) {
      changeValueAnimated()
      $('.how-to-use').css('visibility', 'hidden')
      $('.how-to-use-animated').css('visibility', 'visible')
    }
  })

  $('#close-code-snippet').on('click', function (e) {
    iconName = ''
    $('.how-to-use').css('visibility', 'hidden')
    $('.how-to-use-animated').css('visibility', 'hidden')
  })

  $('#close-code-snippet-animated').on('click', function (e) {
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
})
