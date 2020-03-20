import { createContext } from 'react'
import eosIcons from 'eos-icons/dist/js/eos-icons.json'
import extendedIcons from 'eos-icons/dist/extended/js/glyph-list.json'
import animatedIcons from './AnimatedIcons.store.js'

const multipleIcons = []
const staticIconsOnly = eosIcons.filter(el => animatedIcons.indexOf(el.name) < 0)


/* ==========================================================================
  TEMPORAL SOLUTION WHILE WE'RE WORKING ON THE NEW RELEASE
  ========================================================================== */
const extendedSet = extendedIcons.glyphs.reduce((acc, iconName) => {
  acc.push({
    name: iconName,
    do: '',
    dont: '',
    tags: []
  })

  return acc
}, [])

/* Filter out eos icons names */
const eos = eosIcons.reduce((acc, iconName) => {
  acc.push(iconName.name)
  return acc
}, [])

const eosAndMdIcons = [...staticIconsOnly, ...extendedSet.filter(ele => !eos.includes(ele.name))]
/* ==========================================================================
  END TEMPORAL SOLUTION
========================================================================== */
const allIconsByName = eosAndMdIcons.map(icon => icon.name).filter(el => animatedIcons.indexOf(el) < 0)

/* EOS Icons state */
export const eosIconsState = {
  icons: eosAndMdIcons,
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
  },
  uploadPreviousSelection: function (value) {
    value.forEach(value => { multipleIcons.push(value) })
    return multipleIcons
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
    case 'UPLOAD_PREVIOUS_SELECTION':
      return {
        ...state,
        multipleIcons: eosIconsState.uploadPreviousSelection(action.data)
      }
    default:
      return { ...state }
  }
}

export const EosIconStore = createContext(null)
