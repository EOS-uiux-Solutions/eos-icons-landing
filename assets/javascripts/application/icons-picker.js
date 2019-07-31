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

  const count = document.getElementsByClassName('icons-item-selected').length

  $('.icons-count').html(`${count} icons selected.`)
}

const generate = () => { // eslint-disable-line no-unused-vars
  if ($('.icons-item-selected').length > 0) {
  eos_icons=[];
  extended_icons=[];
  selected=document.getElementsByClassName('icons-item-selected');
  for (i = 0; i < selected.length; i++) { 
    extended_icons.push(selected[i].getElementsByClassName('eos-icons')[0].innerHTML);
    }
  json = {  "eos_icons": eos_icons,
            "extended_icons": extended_icons
        };
  var post_req_url = 'https://eos-icons-picker-api.herokuapp.com/iconsapi'
  $.post(post_req_url, { icons_config: json }, function(data, status){
    window.location.href = `thankyou-page.html?ts=${data}`
  });
  
  }
  
  else {
    window.alert(`Please select atleast one icon to generate font`);
  }
}

const prevSelection = () => {

  var fileToLoad = document.getElementById("configFile").files[0];

  var fileReader = new FileReader();
  fileReader.onload = function (fileLoadedEvent) {
    var textFromFileLoaded = fileLoadedEvent.target.result;
    prev_icons = JSON.parse(textFromFileLoaded);
    prev_eos_icons = prev_icons.eos_icons;
    var all_icons = document.getElementsByClassName('icons-item');

    for (var i = 0; i < all_icons.length; i++) {
      for (j = 0; j < prev_eos_icons.length; j++) {
        if (all_icons[i].getElementsByClassName('eos-icons')[0].innerHTML.includes(prev_eos_icons[j])) {
          all_icons[i].classList.add('icons-item-selected');
        }
      }
    }
  };

  fileReader.readAsText(fileToLoad, "UTF-8");
}

const selectAll = () => {
  var all_icons = document.getElementsByClassName('js-icons-item');
  for (i = 0; i < all_icons.length; i++) {
    all_icons[i].classList.add('icons-item-selected');
  }
}

const deselectAll = () => {
  var all_icons = document.getElementsByClassName('js-icons-item');
  for (i = 0; i < all_icons.length; i++) {
    all_icons[i].classList.remove('icons-item-selected');
  }
}

const downloadFont = () => {
  var url = 'https://eos-icons-picker-api.herokuapp.com/download?' + window.location.href.split('?')[1];
  window.open(url, '_blank');
}