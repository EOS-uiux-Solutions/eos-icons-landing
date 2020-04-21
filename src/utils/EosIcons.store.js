import { createContext } from 'react'
import eosIcons from 'eos-icons/dist/js/eos-icons.json'
import animatedIcons from './AnimatedIcons.store.js'
import Cookies from 'js-cookie'

const multipleIcons = []

const filterOutAnimated = eosIcons.filter(
  ele => animatedIcons.indexOf(ele.name) < 0
)

const allIconsByName = eosIcons
  .map(icon => icon.name)
  .filter(el => animatedIcons.indexOf(el) < 0)

/* Create an array with categories */
const categories = Array.from(
  new Set(
    filterOutAnimated.map(ele => {
      if (typeof ele.category === 'string') return ele.category
      if (typeof ele.category === 'object') return ele.category[0]

      return true
    })
  )
)

const iconsCategory = categories.map(category => {
  return {
    category: category,
    icons: filterOutAnimated
      .map(ele =>
        ele.category === category || ele.category[0] === category ? ele : null
      )
      .filter(ele => ele !== null)
  }
})

/* EOS Icons state */
export const eosIconsState = {
  animatedIcons: animatedIcons,
  icons: filterOutAnimated,
  iconsCategory,
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
  toggleCookies () {
    Cookies.set('acceptance-remainder', 'true')

    const acceptanceStatus = Cookies.get('acceptance')
    if (acceptanceStatus) {
      Cookies.remove('cookies-preference')
      Cookies.remove('acceptance')
    } else {
      Cookies.set('acceptance', 'true', { expires: 60 })
      Cookies.set('cookies-preference', 'true')
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
  setSearchRegularList: function (value) {
    return this.iconsCategory.map(ele => {
      return {
        category: ele.category,
        icons: ele.icons.filter(
          ele => ele.name.includes(value.toLowerCase()) && ele
        )
      }
    })
  },
  setSearchAnimatedList: function (value) {
    return this.animatedIcons.filter(
      animatedIcon => animatedIcon.includes(value.toLowerCase()) && animatedIcon
    )
  },
  uploadPreviousSelection: function (value) {
    value.forEach(value => {
      return !multipleIcons.includes(value) ? multipleIcons.push(value) : ''
    })
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
    case 'TOGGLE_SEARCH_REGULAR_ICONS':
      return {
        ...state,
        iconsCategory: eosIconsState.setSearchRegularList(action.search)
      }
    case 'TOGGLE_SEARCH_ANIMATED_ICONS':
      return {
        ...state,
        animatedIcons: eosIconsState.setSearchAnimatedList(action.search)
      }
    case 'UPLOAD_PREVIOUS_SELECTION':
      return {
        ...state,
        multipleIcons: eosIconsState.uploadPreviousSelection(action.data)
      }
    case 'TOGGLE_CUSTOMIZE_COOKIES':
      return {
        ...state,
        cookiesToggle: eosIconsState.toggleCookies()
      }
    default:
      return { ...state }
  }
}

export const EosIconStore = createContext(null)
