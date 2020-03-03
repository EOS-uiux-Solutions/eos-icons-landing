import { createContext } from 'react';
import eosIcons from 'eos-icons/dist/js/eos-icons.json'

const singleIcon = []
const multipleIcons = []

/* EOS Icons state */
export const eosIconsState = {
  icons: eosIcons,
  singleIcon,
  multipleIcons,
  customize: false,
  setSingleIcon: iconName => {
    singleIcon.shift()
    singleIcon.push(iconName)
    return singleIcon
  },
  setMultipleIcons: function (iconName) {
    !multipleIcons.includes(iconName)
      ? multipleIcons.push(iconName)
      : multipleIcons.splice(multipleIcons.findIndex(ele => ele === iconName), 1)
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
    case 'ADD_SINGLE_ICON':
      return { ...state, singleIcon: eosIconsState.setSingleIcon(action.selection) }
    case 'ADD_MULTIPLE_ICONS':
      return { ...state, multipleIcons: eosIconsState.setMultipleIcons(action.selection) }
    case 'TOGGLE_CUSTOMIZE':
      return { ...state, customize: eosIconsState.toggleCustomize(action.value) }
    default:
      return { ...state }
  }
}

export const EosIconStore = createContext(null)
