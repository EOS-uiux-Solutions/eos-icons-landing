import { createContext } from 'react'
import eosIcons from 'eos-icons/dist/js/eos-icons.json'
import animatedIcons from './AnimatedIcons.store.js'
import Cookies from 'js-cookie'

const multipleIcons = []

const staticIcons = eosIcons.filter((ele) => ele.type === 'static')

/* Create an array with categories */
const categories = Array.from(
  new Set(
    staticIcons.map((ele) => {
      if (typeof ele.category === 'string') return ele.category
      if (typeof ele.category === 'object') return ele.category[0]

      return true
    })
  )
).sort()

const iconsCategory = categories.map((category) => {
  return {
    category: category,
    icons: staticIcons
      .map((ele) =>
        ele.category === category || ele.category[0] === category ? ele : null
      )
      .filter((ele) => ele !== null)
  }
})

function searchMutliple(element, searchArray) {
  for (let i = 0; i < searchArray.length; i++) {
    if (element.includes(searchArray[i])) return true
  }
  return false
}

/* EOS Icons state */
export const eosIconsState = {
  animatedIcons: animatedIcons,
  icons: staticIcons,
  iconsCategory,
  iconsCategoryList: iconsCategory.map((ele) => ele.category),
  multipleIcons,
  customize: false,
  iconsTheme: 'filled',
  cookiesToggle: false,
  setMultipleIcons(iconName) {
    !multipleIcons.includes(iconName)
      ? multipleIcons.push(iconName)
      : multipleIcons.splice(
          multipleIcons.findIndex((ele) => ele === iconName),
          1
        )
    return multipleIcons
  },
  toggleCustomize() {
    /* Clear arrays when switching between customize */
    multipleIcons.splice(0, multipleIcons.length)

    return (this.customize = !this.customize)
  },
  resetCustomize() {
    return (this.customize = false)
  },
  selectAllTagsIcons(tagName) {
    if (tagName === 'all') return this.iconsCategory

    tagName = tagName.toLowerCase()
    return this.iconsCategory.map((ele) => {
      return {
        category: ele.category,
        icons: ele.icons.filter((ele) => ele.tags.includes(tagName))
      }
    })
  },
  toggleCookies() {
    Cookies.set('acceptance-remainder', 'true')

    const acceptanceStatus = Cookies.get('acceptance')
    if (acceptanceStatus) {
      Cookies.remove('cookies-preference')
      Cookies.remove('acceptance')
    } else {
      Cookies.set('acceptance', 'true', { expires: 60 })
      Cookies.set('cookies-preference', 'true')
    }
    this.cookiesToggle = !this.cookiesToggle
  },
  selectAllIcons(search) {
    multipleIcons.splice(0, multipleIcons.length)
    for (let i = 0; i < this.icons.length; i++) {
      if (
        this.icons[i].name.includes(search) ||
        this.icons[i].tags.includes(search)
      )
        multipleIcons.push(this.icons[i].name)
    }
    return multipleIcons
  },
  deselectAllIcons() {
    multipleIcons.splice(0, multipleIcons.length)
    return multipleIcons
  },
  setSearchRegularList: function (value) {
    if (value === '') {
      return this.iconsCategory.map((ele) => {
        return {
          category: ele.category,
          icons: ele.icons
        }
      })
    }

    let keywordsArray

    if (value.includes(';')) {
      keywordsArray = value.split(';')
      value = keywordsArray.join(',')
    }
    if (value.includes('-')) {
      keywordsArray = value.split('-')
      value = keywordsArray.join(',')
    }
    if (value.includes(' ')) {
      keywordsArray = value.split(' ')
      value = keywordsArray.join(',')
    }
    keywordsArray = value.split(',')

    const searchArray = []

    for (let i = 0; i < keywordsArray.length; i++) {
      keywordsArray[i] = keywordsArray[i].trim()
      if (keywordsArray[i] !== '')
        searchArray.push(keywordsArray[i].toLowerCase())
    }

    return this.iconsCategory.map((ele) => {
      return {
        category: ele.category,
        icons: ele.icons.filter(
          (ele) =>
            searchMutliple(ele.name, searchArray) ||
            searchMutliple(ele.tags, searchArray)
        )
      }
    })
  },
  setSearchAnimatedList: function (value) {
    return this.animatedIcons.filter(
      (animatedIcon) =>
        animatedIcon.includes(value.toLowerCase()) && animatedIcon
    )
  },
  uploadPreviousSelection: function (value) {
    try {
      value.forEach((value) => {
        return !multipleIcons.includes(value) ? multipleIcons.push(value) : ''
      })
    } catch (error) {
      alert("JSON file doesn't seem to be right")
    }
    return multipleIcons
  },
  setCategoryFilter: function (value) {
    return value === 'all'
      ? iconsCategory
      : iconsCategory.filter((ele) => ele.category === value)
  }
}

export const iconsReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_MULTIPLE_ICONS':
      return {
        ...state,
        multipleIcons: eosIconsState.setMultipleIcons(action.selection)
      }
    case 'TOGGLE_ICON_TAGS':
      return {
        ...state,
        iconsCategory: eosIconsState.selectAllTagsIcons(action.selection)
      }
    case 'TOGGLE_CUSTOMIZE':
      return {
        ...state,
        customize: eosIconsState.toggleCustomize()
      }
    case 'RESET_CUSTOMIZE':
      return {
        ...state,
        customize: eosIconsState.resetCustomize()
      }
    case 'ADD_ALL_ICONS':
      return {
        ...state,
        multipleIcons: eosIconsState.selectAllIcons(action.search)
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
    case 'SET_CATEGORY_SELECTOR':
      return {
        ...state,
        iconsCategory: eosIconsState.setCategoryFilter(action.category)
      }
    case 'SET_ICONS_THEME':
      return {
        ...state,
        iconsTheme: (eosIconsState.iconsTheme = action.action)
      }
    default:
      return { ...state }
  }
}

export const EosIconStore = createContext(null)
