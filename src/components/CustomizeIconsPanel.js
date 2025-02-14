import React, { useState, useContext } from 'react'
import Button from './Button'
import { eosIconsState } from '../utils/EosIcons.store'
import GeneratingFont from './GeneratingFont'
import Modal from './Modal'
import ThankYou from './ThankYou'
import IconEditor from './IconEditor'
import axios from 'axios'
import AppContext from '../utils/AppContext'
import { ICON_PICKER_API_URL } from '../config.json'

const sendData = async (params) => {
  const { url, payload } = params

  const response = await axios.post(url, {
    exportAs: 'font',
    icons: payload
  })

  return response.data
}

const DownloadFont = (props) => {
  const { timestamp } = props
  const downloadEndPoints = `${ICON_PICKER_API_URL}/download?ts=${timestamp}`
  return window.open(downloadEndPoints, '_blank')
}

const CustomizeIconsPanel = (props) => {
  const { state, Dispatch } = useContext(AppContext)
  const [IconEditorToggle, setIconEditorToggle] = useState(false)

  const IconEditorToggle = (e) => {
    e.preventDefault()
    if (value.IconsArray.length > 0) setIconEditorToggle(!IconEditorToggle)
    else window.Alert('Please select at least one icon')
  }

  const { selectAll, deselectAll } = props
  const value = eosIconsState

  const [ModalToggle, setModalToggle] = useState(false)
  const [serverResponse, setServerResponse] = useState(null)

  const ModalToggle = () => {
    setModalToggle(!ModalToggle)
  }

  const GenerateFont = (e) => {
    if (value.IconsArray.length > 0) {
      e.preventDefault()
      ModalToggle()
      sendData({
        url: `${ICON_PICKER_API_URL}/icons/api${
          state.Theme === 'outlined' ? '?theme=outlined' : ''
        }`,
        payload: value.IconsArray
      }).then(setServerResponse)
    } else {
      window.Alert('Please select at least one icon')
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
          <span>{value.IconsArray.length} icons selected</span>
          <span>Export as: </span>
          <Button type='submit' onClick={GenerateFont}>
            Font
          </Button>
          <Button type='button' onClick={IconEditorToggle}>
            Images
          </Button>
        </div>

        <div>
          <div className='icons-picker-footer-upload'>
            <p>Continue building your font </p>
            <label className='btn btn-default' htmlFor='upload-file'>
              Upload JSON
            </label>
            <input
              type='file'
              id='upload-file'
              accept='application/JSON'
              hidden
              name='file'
              onChange={(event) => Search(event.target.files[0], Dispatch)}
            />
          </div>
        </div>
      </div>
      {IconEditorToggle ? (
        <IconEditor
          isActive={IconEditorToggle}
          show={IconEditorToggle}
          icon-names={value.IconsArray}
        />
      ) : (
        ''
      )}
      {ModalToggle ? (
        <Modal
          showButtons={serverResponse !== null}
          okText='Download'
          onOk={() => DownloadFont({ timestamp: serverResponse })}
          onCancel={ModalToggle}
          isActive={ModalToggle}
          show={ModalToggle}
        >
          {serverResponse === null ? <GeneratingFont /> : <ThankYou />}
        </Modal>
      ) : (
        ''
      )}
    </>
  )
}

const Search = (file, Dispatch) => {
  const FileReader = new window.FileReader()

  FileReader.onload = function (FileData) {
    const IconsArray = JSON.parse(FileData.target.result)
    let Data = []
    try {
      // works for both versions for now
      if (Object.prototype.hasOwnProperty.call(IconsArray, 'Icons'))
        Data = IconsArray.Icons
      if (Object.prototype.hasOwnProperty.call(IconsArray, 'extended-icons'))
        Data = IconsArray.extended-icons
      return Dispatch({
        type: 'UPLOAD_PREVIOUS_SELECTION',
        Data: Data
      })
    } catch (error) {
      Alert('JSON file seems to be incorrect')
    }
  }
  return FileReader.readAsText(file)
}

export default CustomizeIconsPanel
