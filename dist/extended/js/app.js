(function () {
  let showCodeSnippet = false // eslint-disable-line no-unused-vars
  let iconName, iconDemo, iconSize, iconClass

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
    iconName = e.target.getAttribute('data-name') || e.target.parentNode.getAttribute('data-name')
    document.getElementById('animatedIconDemo').innerHTML = iconDemo
    if (iconName) {
      showCodeSnippet = true
      iconDemo = `<pre><code><i class=&quoteos-icons eos-icon-${iconName}> </i></code></pre>`
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
  for (let i = 0; i < buttonsSizes.length; i++) {
    buttonsSizes[i].onclick = function (e) {
      e = e || window.event
      iconSize = e.target.getAttribute('data-size')
      iconClass = `md-${iconSize}`
      for (let y = 0; y < document.getElementsByClassName('eos-icons').length; y++) {
        document.getElementsByClassName('eos-icons')[y].style.fontSize = `${iconSize}px`
        document.getElementById('eos-icon-installing').className = `eos-icons eos-icon-installing${iconClass}`
      }
    }
  }
})()

const searchIcon = () => { // eslint-disable-line no-unused-vars
  const input = document.getElementsByClassName('searchbar')[0].value
  const icons = document.getElementsByClassName('icons-item')

  for (let i = 0; i < icons.length; i++) {
    if (!(icons[i].getElementsByClassName('eos-icons')[0].innerHTML.includes(input))) {
      icons[i].style.display = 'none'
    } else {
      icons[i].style.display = 'inline-block'
    }
  }
}
