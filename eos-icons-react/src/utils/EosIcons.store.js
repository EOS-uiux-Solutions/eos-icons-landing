import { createContext } from 'react'
import eosIcons from '../../node_modules/eos-icons/dist/js/eos-icons.json'

const singleIcon = []
const multipleIcons = []
const iconNames = eosIcons.map(icon => icon.name)

/* EOS Icons state */
export const eosIconsState = {
  icons: eosIcons,
  singleIcon,
  multipleIcons,
  customize: false,
  selectAll: false,
  deselectAll: false,
  setSingleIcon (iconName) {
    singleIcon.shift()
    singleIcon.push(iconName)
    return singleIcon
  },
  setMultipleIcons (iconName) {
    !multipleIcons.includes(iconName)
      ? multipleIcons.push(iconName)
      : multipleIcons.splice(
          multipleIcons.findIndex(ele => ele === iconName),
          1
        )
    return multipleIcons
  },
  toggleCustomize () {
    /* Clear arrays when switching between customize */
    singleIcon.splice(0, singleIcon.length)
    multipleIcons.splice(0, multipleIcons.length)

    return (this.customize = !this.customize)
  },
  toggleSelectAll () {
    return (this.selectAll = !this.selectAll)
  },
  toggleDeselectAll () {
    return (this.deselectAll = !this.deselectAll)
  },
  selectAllIcons () {
    multipleIcons.splice(0, multipleIcons.length)
    multipleIcons.push(...iconNames)
    return multipleIcons
  },
  deselectAllIcons () {
    multipleIcons.splice(0, multipleIcons.length)
    return multipleIcons
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
        selectAll: eosIconsState.toggleSelectAll(),
        multipleIcons: eosIconsState.selectAllIcons()
      }
    case 'REMOVE_ALL_ICONS':
      return {
        ...state,
        deselectAll: eosIconsState.toggleDeselectAll(),
        multipleIcons: eosIconsState.deselectAllIcons()
      }
    default:
      return { ...state }
  }
}

export const EosIconStore = createContext(null)
