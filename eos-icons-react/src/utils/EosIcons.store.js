// https://yduman.github.io/blog/useContext-usage/
import { createContext } from 'react';
import eosIcons from '../../node_modules/eos-icons/dist/js/eos-icons.json'

const singleIcon = []
const multipleIcons = []


export const eosIconsState = {
  icons: eosIcons,
  singleIcon,
  multipleIcons,
  customize: false,
  setSingleIcon: str => {
    singleIcon.shift()
    singleIcon.push(str)
    return singleIcon
  },
  setMultipleIcons: function (str) {
    !multipleIcons.includes(str)
      ? multipleIcons.push(str)
      : multipleIcons.splice(multipleIcons.findIndex(ele => ele === str), 1)
    return multipleIcons
  },
  toggleCustomize: function () {
    /* Clear arrays when switching between customize */
    singleIcon.splice(0, singleIcon.length)
    multipleIcons.splice(0, multipleIcons.length)

    return this.customize = !this.customize
  }
}

export const iconsReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ICON':
      return { ...state, singleIcon: eosIconsState.setSingleIcon(action.selection) }
    case 'ADD_ICONS':
      return { ...state, multipleIcons: eosIconsState.setMultipleIcons(action.selection) }
    case 'TOGGLE_CUSTOMIZE':
      return { ...state, customize: eosIconsState.toggleCustomize(action.value) }
    default:
      return { ...state }
  }
}

export const EosIconStore = createContext(null)
