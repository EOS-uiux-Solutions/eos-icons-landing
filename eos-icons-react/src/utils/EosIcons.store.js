import { createContext } from 'react'
import eosIcons from '../../node_modules/eos-icons/dist/js/eos-icons.json'
console.log(eosIcons)
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
      : multipleIcons.splice(
          multipleIcons.findIndex(ele => ele === iconName),
          1
        )
    return multipleIcons
  },
  toggleCustomize: function () {
    /* Clear arrays when switching between customize */
    singleIcon.splice(0, singleIcon.length)
    multipleIcons.splice(0, multipleIcons.length)

    return (this.customize = !this.customize)
  },
  selectAllIcons () {
    multipleIcons.splice(0, multipleIcons.length)
    multipleIcons.push(...this.icons.map(icon => icon.name))
  }
}

export const iconsReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_SINGLE_ICON':
      return {
        ...state,
        singleIcon: eosIconsState.setSingleIcon(action.selection)
      }
    case 'ADD_MULTIPLE_ICONS':
      return {
        ...state,
        multipleIcons: eosIconsState.setMultipleIcons(action.selection)
      }
    case 'TOGGLE_CUSTOMIZE':
      return {
        ...state,
        customize: eosIconsState.toggleCustomize()
      }
    case 'ADD_ALL_ICONS':
      return {
        ...state,
        multipleIcons: eosIconsState.selectAllIcons()
      }
    default:
      return { ...state }
  }
}

export const EosIconStore = createContext(null)
