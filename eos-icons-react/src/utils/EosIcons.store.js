// https://yduman.github.io/blog/useContext-usage/
import { createContext } from 'react';
import eosIcons from '../../node_modules/eos-icons/dist/js/eos-icons.json'

const singleIcon = []
const multipleIcons = []

export const eosIconsState = {
  icons: eosIcons,
  singleIcon,
  multipleIcons,
  isSingle: true,
  setSingleIcon: str => {
    singleIcon.shift()
    singleIcon.push(str)
    return singleIcon
  },
  setMultipleIcons: str => {
    multipleIcons.push(str)
    return multipleIcons
  }
}

export const iconsReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ICON':
      return { ...state, singleIcon: eosIconsState.setSingleIcon(action.selection) }
    case 'ADD_ICONS':
      return { ...state, multipleIcons: eosIconsState.setMultipleIcons(action.selection) }
    default:
      return { ...state }
  }
}

export const EosIconStore = createContext(null)
