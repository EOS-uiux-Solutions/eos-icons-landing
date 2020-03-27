import React, { useState } from 'react'
import Button from './Button'
import { eosIconsState } from '../utils/EosIcons.store'
import GeneratingFont from './GeneratingFont'
import Modal from './Modal'
import ThankYou from './ThankYou'
import axios from 'axios'

const sendData = async params => {
  const { url, payload } = params

  const response = await axios.post(url, {
    icons_config: {
      eos_icons: [],
      extended_icons: payload
    }
  })

  return response.data
}

const downloadFont = props => {
  const { timestamp } = props
  const downloadEndPoints = `https://eos-icons-picker-api.herokuapp.com/download?ts=${timestamp}`
  return window.open(downloadEndPoints, '_blank')
}

const CustomizeIconsPanel = props => {
  const { selectAll, deselectAll } = props
  const value = eosIconsState

  const [modal, setModal] = useState(false);
  const [serverResponse, setServerResponse] = useState(null);

  const modalToggle = () => {
    setModal(!modal)
  }

  const generateFont = e => {
    e.preventDefault()
    modalToggle()
    sendData({
      url: 'https://eos-icons-picker-api.herokuapp.com/iconsapi',
      payload: value.multipleIcons
    }).then(setServerResponse)
  }

  return (
    <>
      <div className='icons-picker-footer'>
        <div className='select-all-icons' onClick={selectAll}>
          Select all <i className='eos-icons'>select_all</i>
        </div>
        <div className='deselect-all-icons' onClick={deselectAll}>
          Deselect all <i className='eos-icons'>clear</i>
        </div>
        <div className='generate-div'>
          <span>{value.multipleIcons.length} icons selected</span>
          <Button primary type='submit' onClick={generateFont}>
            Generate font
          </Button>
        </div>
      </div>

      {modal
        ? <Modal
          showButtons={serverResponse !== null
            ? true
            : false
          }
          okText="Download"
          onOk={() =>
            downloadFont({ timestamp: serverResponse })}
          onCancel={modalToggle}
          isActive={modal}
          show={modalToggle}>
          {
            serverResponse === null
              ? <GeneratingFont />
              : <ThankYou fn={downloadFont} timestamp={serverResponse} />
          }
        </Modal>
        : ''
      }
    </>
  )
}

export default CustomizeIconsPanel
