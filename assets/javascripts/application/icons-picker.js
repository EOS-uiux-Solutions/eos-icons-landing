(function () {
  let iconSize, iconClass

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
  const input = document.getElementsByClassName('searchbar')[0].value
  const x = document.getElementsByClassName('icons-item')
  for (let i = 0; i < x.length; i++) {
    if (!(x[i].getElementsByClassName('eos-icons')[0].innerHTML.includes(input))) {
      x[i].style.display = 'none'
    } // eslint-disable-line brace-style
    else {
      x[i].style.display = 'inline-block'
    }
  }
}

const addSelection = (obj) => { // eslint-disable-line no-unused-vars
  if (obj.className.includes('icons-item-selected')) {
    obj.classList.remove('icons-item-selected')
  } else {
    obj.classList.add('icons-item-selected')
  }
  iconsCount()
}

const generate = () => { // eslint-disable-line no-unused-vars
  if ($('.icons-item-selected').length > 0) {
    $('.icons-picker-loading').css({ display: 'block' })
    const eosIcons = []
    const extendedIcons = []
    const selected = document.getElementsByClassName('icons-item-selected')
    for (let i = 0; i < selected.length; i++) {
      extendedIcons.push(selected[i].getElementsByClassName('eos-icons')[0].innerHTML)
    }
    const json = { 'eos_icons': eosIcons,
      'extended_icons': extendedIcons
    }
    console.log(json)
    const postReqUrl = 'https://eos-icons-picker-api.herokuapp.com/iconsapi'
    $.post(postReqUrl, { icons_config: json }, function (data, status) {
      window.location.href = `thankyou-page.html?ts=${data}`
    })
  } else {
    window.alert(`Please select atleast one icon to generate font`)
  }
}

const prevSelection = () => { // eslint-disable-line no-unused-vars
  const fileToLoad = document.getElementById('configFile').files[0]
  const fileReader = new window.FileReader() // eslint-disable-line-no-undef
  fileReader.onload = function (fileLoadedEvent) {
    const textFromFileLoaded = fileLoadedEvent.target.result
    const prevIcons = JSON.parse(textFromFileLoaded)
    const prevExtendedIcons = prevIcons.extended_icons
    const allIcons = document.getElementsByClassName('icons-item')
    for (let i = 0; i < allIcons.length; i++) {
      for (let j = 0; j < prevExtendedIcons.length; j++) {
        if (allIcons[i].getElementsByClassName('eos-icons')[0].innerHTML === prevExtendedIcons[j]) {
          allIcons[i].classList.add('icons-item-selected')
        }
      }
    }
    iconsCount()
  }
  fileReader.readAsText(fileToLoad, 'UTF-8')
}

const selectAll = () => { // eslint-disable-line no-unused-vars
  const allIcons = document.getElementsByClassName('js-extended-icons-item')
  for (let i = 0; i < allIcons.length; i++) {
    allIcons[i].classList.add('icons-item-selected')
  }
  iconsCount()
}

const deselectAll = () => { // eslint-disable-line no-unused-vars
  const allIcons = document.getElementsByClassName('js-extended-icons-item')
  for (let i = 0; i < allIcons.length; i++) {
    allIcons[i].classList.remove('icons-item-selected')
  }
  iconsCount()
}

const downloadFont = () => { // eslint-disable-line no-unused-vars
  const downloadEndPoints = 'https://eos-icons-picker-api.herokuapp.com/download?'
  const downloadTimeStamp = window.location.href.split('?')[1]
  const downloadUrl = downloadEndPoints + downloadTimeStamp
  window.open(downloadUrl, '_blank')
}

const autoDownloadFont = () => { // eslint-disable-line no-unused-vars
  let timerCount = 0
  const maxTimer = 5
  const timerInterval = setInterval(function () {
    if (timerCount <= maxTimer) {
      $('.js-download-timer').html(`Download will begin in ${maxTimer - timerCount} seconds or click below to start downloading`)
      timerCount++
    } else {
      clearInterval(timerInterval)
      downloadFont()
    }
  }, 1000)
}

const iconsCount = () => {
  const count = $('.icons-item-selected').length
  $('.js-icons-count').html(`${count} icons selected.`)
}