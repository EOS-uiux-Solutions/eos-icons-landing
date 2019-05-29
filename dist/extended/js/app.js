(function () {
  const data = '{"fontname":"eos-icons","repositoryUrl":"https://gitlab.com/SUSE-UIUX/eos-icons","baseClass":"eos-icons","glyphs":["action_chains","activate_subscriptions","admin","application_incomplete","application_instance","application","autoinstallation","background_tasks","bootstrapping","cleanup","cloud_foundry_space","collocation","configuration_file","constraint","counting","critical_bug","csv_file","endpoints_connected","endpoints_disconnected","endpoints","enhancement","file_system","image","miscellaneous","modified_date","move","multistate","network_file_system","organization","package_upgrade","package","packages","pin","primitive","product_classes","product_subscriptions","products","proxy","ptf","repositories","route","sandbox","service_instance","service_plan","service","smt","snapshot_rollback","software","state","subscriptions_created","symlink","system_group","system_re_registered","timeout","troubleshooting","trusted_organization","unpatched","virtual_guest","virtual_host_manager"],"animatedIcons":["loading","installing"]}'
  /* eslint-disable */
  let showCodeSnippet = false // eslint-disable-line no-unused-vars
  let iconName

  // hide code snippet by default
  document.getElementsByClassName('how-to-use')[0].style.visibility = 'hidden'
  document.getElementsByClassName('how-to-use-animated')[0].style.visibility = 'hidden'

  document.getElementById('icons').onclick = function (e) {
    e = e || window.event
    iconName = e.target.getAttribute('data-name') || e.target.parentNode.getAttribute('data-name')
    document.getElementById('eos-icon-name').innerHTML = iconName

    if (iconName) {
      showCodeSnippet = true
      console.log('something selected')
      document.getElementsByClassName('how-to-use')[0].style.visibility = 'visible'
      document.getElementsByClassName('how-to-use-animated')[0].style.visibility = 'hidden'
    }
  }

  document.getElementById('icons-animated').onclick = function (e) {
    e = e || window.event
    iconName = e.target.getAttribute('data-name') || e.target.parentNode.getAttribute('data-name') // eslint-disable-line prefer-template
    document.getElementById('animatedIconDemo').innerHTML = iconDemo // eslint-disable-line no-undef
    if (iconName) {
      showCodeSnippet = true
      iconDemo = '<pre><code>&lt;i class=&quoteos-icons eos-icon-' + iconName + '&quot;&gt;' + '&lt;/i&gt;</code></pre>'
      document.getElementsByClassName('how-to-use-animated')[0].style.visibility = 'visible'
    }
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
  for (i = 0; i < buttonsSizes.length; i++) { // eslint-disable-line no-undef
    buttonsSizes[i].onclick = function (e) { // eslint-disable-line no-undef
      e = e || window.event
      iconSize = e.target.getAttribute('data-size') // eslint-disable-line no-undef
      iconClass = 'md-' + iconSize // eslint-disable-line no-undef
      for (i = 0; i < document.getElementsByClassName('eos-icons').length; i++) { // eslint-disable-line no-undef
        document.getElementsByClassName('eos-icons')[i].style.fontSize = iconSize + 'px' // eslint-disable-line no-undef
        document.getElementById('eos-icon-installing').className = 'eos-icons eos-icon-installing ' + iconClass // eslint-disable-line prefer-template
      }
    }
  }


  // const getIconsList = (callback) => { 
  //   $.ajax({
  //     url: 'http://localhost:8000/js/glyph-list.json',
  //     method: 'get',
  //     dataType: `json`,
  //     error: function (xhr, status, error) {
  //       console.log(`there was an error retrieving the icons collection`)
  //     }
  //   }))
  //   .then(function (dataGlyph) {
  //     callback(dataGlyph)
  //   })
  // }

  // function iconsList () {
  //   getIconsList ( function (data) {
  //     console.log(data)
  //   })
  // }
  // iconsList()

  const obj = JSON.parse(data);
  
  $iconsContainer = $('.js-icons-list')
  
  $iconDisplayTemplate = $('.js-icons-item').clone(true)
  $('.js-icons-item').remove()
  getIconsCollection(obj)

})()

function getIconsCollection (data) {
  var iconsList = data.glyphs

  for (var i = 0; i < iconsList.length; i++) {
    var newIconDisplay = $iconDisplayTemplate.clone(true)
    var iconName = iconsList[i]

    // Add icon name
    $(newIconDisplay).attr('data-name', iconName)
    $(newIconDisplay).find('.js-eos-icons').text(iconName).addClass(`eos-icon-` + iconName)
    $(newIconDisplay).find('.js-eos-icon-name').text(iconName)

    $($iconsContainer).append(newIconDisplay)
  }
}

function searchIcon () { // eslint-disable-line no-unused-vars
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