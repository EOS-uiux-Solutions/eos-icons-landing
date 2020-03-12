import React, { useContext, useReducer, useState } from 'react'
import Button from './Button'
import { EosIconStore, iconsReducer } from '../utils/EosIcons.store'
import selectIconContext from '../utils/selectIconContext'
import deSelectIconContext from '../utils/deSelectIconContext'
import GeneratingFont from './GeneratingFont'
import Modal from './Modal'
import ThankYou from './ThankYou'
import axios from 'axios'

const sendData = async params => {
  const { url } = params

  const response = await axios.post(url, {
    icons_config: {
      eos_icons: [],
      extended_icons: ['admin']
    }
  })

  return response.data
}

const downloadFont = props => {
  const { timestamp } = props
  const downloadEndPoints = `https://eos-icons-picker-api.herokuapp.com/download?ts=${timestamp}`
  return window.open(downloadEndPoints, '_blank')
}

const CustomizeIconsPanel = () => {
  const value = useContext(EosIconStore)

  const [state, dispatch] = useReducer(iconsReducer, value)
  const [modal, setModal] = useState(false);
  const [serverResponse, setServerResponse] = useState(null);


  const modalToggle = () => {
    setModal(!modal)
  }

  const [, setAllSelect] = useContext(selectIconContext)

  const [, setAllDeSelect] = useContext(deSelectIconContext)

  const selectAll = e => {
    e.preventDefault()
    setAllSelect(true)
    return dispatch({
      type: 'ADD_ALL_ICONS'
    })
  }

  const deselectAll = e => {
    e.preventDefault()
    setAllSelect(false)
    setAllDeSelect(true)
    return dispatch({
      type: 'REMOVE_ALL_ICONS'
    })
  }

  const generateFont = e => {
    e.preventDefault()
    modalToggle()
    sendData({
      url: 'http://localhost:3131/iconsapi',
      payload: state.multipleIcons
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
          <span>{state.multipleIcons.length} icons selected</span>
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
