import React, { useState, useContext } from 'react'
import Button from './Button'
import { eosIconsState } from '../utils/EosIcons.store'
import GeneratingFont from './GeneratingFont'
import Modal from './Modal'
import ThankYou from './ThankYou'
import IconEditor from './IconEditor'
import axios from 'axios'
import AppContext from '../utils/AppContext'

const sendData = async (params) => {
  const { url, payload } = params

  const response = await axios.post(url, {
    exportAs: 'font',
    icons: payload
  })

  return response.data
}

const downloadFont = (props) => {
  const { timestamp } = props
  const downloadEndPoints = `https://eos-icons-picker-api.herokuapp.com/download?ts=${timestamp}`
  return window.open(downloadEndPoints, '_blank')
}

const CustomizeIconsPanel = (props) => {
  const { dispatch } = useContext(AppContext)
  const [iconEditor, setIconEditor] = useState(false)

  const iconEditorToggle = (e) => {
    e.preventDefault()
    if (value.multipleIcons.length > 0) setIconEditor(!iconEditor)
    else window.alert('Please select atleast one icon')
  }

  const { selectAll, deselectAll } = props
  const value = eosIconsState

  const [modal, setModal] = useState(false)
  const [serverResponse, setServerResponse] = useState(null)

  const modalToggle = () => {
    setModal(!modal)
  }

  const generateFont = (e) => {
    if (value.multipleIcons.length > 0) {
      e.preventDefault()
      modalToggle()
      sendData({
        url: 'https://eos-icons-picker-api.herokuapp.com/iconsapi',
        payload: value.multipleIcons
      }).then(setServerResponse)
    }
  }

  return (
    <>
      <div className='icons-picker-footer'>
        <div>
          <div className='select-all-icons' onClick={selectAll}>
            Select all <i className='eos-icons'>select_all</i>
          </div>
          <div className='deselect-all-icons' onClick={deselectAll}>
            Deselect all <i className='eos-icons'>clear_all</i>
          </div>
        </div>
        <div className='generate-div'>
          <span>{value.multipleIcons.length} icons selected</span>
          <span>Export as: </span>
          <Button type='submit' onClick={generateFont}>
            Font
          </Button>
          <Button type='button' onClick={iconEditorToggle}>
            Images
          </Button>
        </div>

        <div>
          <div className='icons-picker-footer-upload'>
            <p>Continue building your font </p>
            <label className='btn' htmlFor='upload-file'>
              Upload JSON
            </label>
            <input
              type='file'
              id='upload-file'
              hidden
              name='file'
              onChange={(event) => search(event.target.files[0], dispatch)}
            />
          </div>
        </div>
      </div>
      {iconEditor ? (
        <IconEditor
          isActive={iconEditor}
          show={iconEditorToggle}
          iconNames={value.multipleIcons}
        />
      ) : (
        ''
      )}
      {modal ? (
        <Modal
          showButtons={serverResponse !== null}
          okText='Download'
          onOk={() => downloadFont({ timestamp: serverResponse })}
          onCancel={modalToggle}
          isActive={modal}
          show={modalToggle}
        >
          {serverResponse === null ? (
            <GeneratingFont />
          ) : (
            <ThankYou fn={downloadFont} timestamp={serverResponse} />
          )}
        </Modal>
      ) : (
        ''
      )}
    </>
  )
}

const search = (file, dispatch) => {
  const fileReader = new window.FileReader()

  fileReader.onload = function (fileData) {
    const iconsArray = JSON.parse(fileData.target.result)
    let data = []
    try {
      // works for both versions for now
      if (Object.prototype.hasOwnProperty.call(iconsArray, 'icons'))
        data = iconsArray.icons
      if (Object.prototype.hasOwnProperty.call(iconsArray, 'extended_icons'))
        data = iconsArray.extended_icons
      return dispatch({
        type: 'UPLOAD_PREVIOUS_SELECTION',
        data: data
      })
    } catch (error) {
      alert('JSON file seems to be incorrect')
    }
  }
  return fileReader.readAsText(file)
}

export default CustomizeIconsPanel
