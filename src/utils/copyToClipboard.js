import linkData from './linksData'

const copyToClipboard = async (value) => {
  if (value === 'copy-code') {
    document.getElementById('copy-code').select()
    document.execCommand('copy')
    alert('Successfully Copied')
  } else {
    let copyText
    linkData.map((val) => {
      if (val.classname === value) {
        copyText = val.link
      }
      return null
    })

    await navigator.clipboard
      .writeText(copyText)
      .then(() => {
        alert('Successfully Copied')
      })
      .catch(() => {
        alert("Couldn't Copy")
      })
  }
}

export default copyToClipboard
