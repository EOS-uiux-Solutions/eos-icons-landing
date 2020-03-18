import React, { useState, useReducer } from 'react'
import { iconsReducer, eosIconsState } from '../utils/EosIcons.store'

import PageHeader from '../components/PageHeader'
import DownloadEosIcons from '../components/DownloadEosIcons'
import IconsSet from '../modules/IconsSet'
import Button from '../components/Button'

const Cheatsheet = () => {
  const [header, setHeader] = useState(true)

  const manageHeader = () => {
    setHeader(!header)
  }
  const [state, dispatch] = useReducer(iconsReducer, eosIconsState)
  console.log(state)

  const onChangeHandler = event => {
    const fileToLoad = event.target.files[0]
    const fileReader = new window.FileReader() // eslint-disable-line-no-undef
    fileReader.onload = function (fileLoadedEvent) {
      const textFromFileLoaded = fileLoadedEvent.target.result
      const prevIcons = JSON.parse(textFromFileLoaded)
      const prevExtendedIcons = prevIcons.extended_icons
      return dispatch({
        type: 'UPLOAD_PREVIOUS_SELECTION',
        data: prevExtendedIcons
      })
    }
    fileReader.readAsText(fileToLoad)
  }

  return (
    <div>
      {header ? (
        <PageHeader theme='purple'>
          <h2>
            Cheatsheet: find the ligature of the icon you are looking for, plus,
            get an overview of all the available icons.
          </h2>
        </PageHeader>
      ) : (
          <PageHeader theme='purple'>
            <div>
              <h2>Click on Icons to select them</h2>
              <p>
                To continue building an old font, upload icons-config.json
              </p>
              <Button> <i class='eos-icons md-18'>cloud_upload</i> Upload JSON </Button>
               <input type="file" name="file" onChange={onChangeHandler}/>
            </div>
          </PageHeader>
        )}
      <DownloadEosIcons />
      <IconsSet action={manageHeader} />
    </div>
  )
}

export default Cheatsheet
