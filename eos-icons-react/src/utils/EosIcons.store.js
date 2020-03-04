import { createContext } from 'react'
import eosIcons from 'eos-icons/dist/js/eos-icons.json'

const singleIcon = []
const multipleIcons = []
const iconNames = eosIcons.map(icon => icon.name)

/* EOS Icons state */
export const eosIconsState = {
  icons: eosIcons,
  singleIcon,
  multipleIcons,
  customize: false,
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
  selectAllIcons () {
    multipleIcons.splice(0, multipleIcons.length)
    multipleIcons.push(...iconNames)
    return multipleIcons
  },
  deselectAllIcons () {
    multipleIcons.splice(0, multipleIcons.length)
    return multipleIcons
  },
  setSearchList: function (value) {
    return this.icons.filter(
      icon => icon.name.includes(value.toLowerCase()) && icon
    )
  }
}

export const iconsReducer = (state, action) => {
  console.log('state', state, 'action', action)
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
    case 'REMOVE_ALL_ICONS':
      return {
        ...state,
        multipleIcons: eosIconsState.deselectAllIcons()
      }
    case 'TOGGLE_SEARCH':
      return {
        ...state,
        icons: eosIconsState.setSearchList(action.search)
      }
    default:
      return { ...state }
  }
}

export const EosIconStore = createContext(null)