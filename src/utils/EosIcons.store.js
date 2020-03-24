import { createContext } from 'react'
import eosIcons from 'eos-icons/dist/js/eos-icons.json'
import animatedIcons from './AnimatedIcons.store.js'
import Cookies from 'js-cookie'

const multipleIcons = []
const allIconsByName = eosIcons.map(icon => icon.name).filter(el => animatedIcons.indexOf(el) < 0)
const staticIconsOnly = eosIcons.filter(el => animatedIcons.indexOf(el.name) < 0)


/* EOS Icons state */
export const eosIconsState = {
  icons: staticIconsOnly,
  multipleIcons,
  customize: false,
  cookiesToggle: false,
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
  toggleCookies (value) {
    this.cookiesToggle = value
    if(value) {
      Cookies.remove('acceptance')
      Cookies.remove('cookies-preference')
    } else {
      Cookies.set('acceptance', 'true', { expires: 60 })
      Cookies.set('cookies-preference', 'true')
      Cookies.set('acceptance-remainder', 'true')
    }
    return (this.cookiesToggle = !this.cookiesToggle)
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
    case 'TOGGLE_CUSTOMIZE_COOKIES':
      return {
        ...state,
        cookiesPreference: eosIconsState.toggleCookies(action.cookiesAcceptance)
      }
    default:
      return { ...state }
  }
}

export const EosIconStore = createContext(null)
