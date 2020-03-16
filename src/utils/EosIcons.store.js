import { createContext } from 'react'
import eosIcons from 'eos-icons/dist/js/eos-icons.json'
import extendedIcons from 'eos-icons/dist/extended/js/glyph-list.json'
import animatedIcons from './AnimatedIcons.store.js'

/* Temportal solution for extended version */
const extendedSet = extendedIcons.glyphs.reduce((acc, iconName) => {

  acc.push({
    name: iconName,
    do: '',
    dont: '',
    tags: []
  })

  return acc
}, [])

const multipleIcons = []
const allIconsByName = eosIcons.map(icon => icon.name).filter(el => animatedIcons.indexOf(el) < 0)
const staticIconsOnly = eosIcons.filter(el => animatedIcons.indexOf(el.name) < 0)

const mixIcons = [...staticIconsOnly, ...extendedSet]

/* EOS Icons state */
export const eosIconsState = {
  icons: mixIcons,
  multipleIcons,
  customize: false,
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
    multipleIcons.splice(0, multipleIcons.length)

    return (this.customize = !this.customize)
  },
  selectAllIcons () {
    multipleIcons.splice(0, multipleIcons.length)
    multipleIcons.push(...allIconsByName)
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
  switch (action.type) {
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
