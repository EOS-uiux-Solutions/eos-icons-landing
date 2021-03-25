import React, { useState, useEffect, useContext, useRef } from 'react'
import AppContext from '../utils/AppContext'

/* Components */
import Icon from '../components/IconDisplay'
import Tabs from '../components/Tabs'
import CustomizeIconsPanel from '../components/CustomizeIconsPanel'
import HowTo from '../components/HowToPanel'
import { eosIconsState } from '../utils/EosIcons.store'
import PageHeader from '../components/PageHeader'
import { CategorySelector } from '../components/CategorySelector'
import { useWindowsSize } from '../hooks/useWidow'

const IconsSet = (props) => {
  const [iconSelected, setIconSelected] = useState('')
  const [showPanel, setShowPanel] = useState(false)
  const [searchValue, setSearchValue] = useState('')
  const [size] = useWindowsSize()
  const { state, dispatch } = useContext(AppContext)
  const [tab, setActiveTab] = useState('Static Icons')
  const [staticHistory, setStaticHistory] = useState('')
  const [animatedHistory, setAnimatedHistory] = useState('')
  const searchRef = useRef(null)
  const queryString = window.location.search
  const urlParams = new URLSearchParams(queryString)
  const urlIconName = urlParams.get('iconName')
  const urlTagName = urlParams.get('tagName')
  const [selectMultiple, setSelectMultiple] = useState(true)
  const [emptySearchResult, setEmptySearchResult] = useState(false)
  const [suggestedString, setSuggestedString] = useState('')

  let setSearchWithUrlParam = urlIconName

  if (setSearchWithUrlParam === '' || setSearchWithUrlParam === null) {
    if (urlTagName !== null && urlTagName !== '')
      setSearchWithUrlParam = urlTagName
  }

  useEffect(() => {
    if (setSearchWithUrlParam !== null && setSearchWithUrlParam !== '')
      setSearchValue(setSearchWithUrlParam)
  }, [setSearchWithUrlParam])

  const editDistance = (string1, string2) => {
    if (string2.length > string1.length) {
      string2 = string2.slice(0, string1.length)
    }
    const m = string1.length
    const n = string2.length
    const dp = new Array(m + 1)

    for (let i = 0; i <= m; i++) {
      dp[i] = new Array(n + 1)
    }

    for (let i = 0; i <= m; i++) {
      for (let j = 0; j <= n; j++) {
        if (i === 0) dp[i][j] = j
        else if (j === 0) dp[i][j] = i
        else if (string1[i - 1] === string2[j - 1]) dp[i][j] = dp[i - 1][j - 1]
        else
          dp[i][j] = 1 + Math.min(dp[i][j - 1], dp[i - 1][j], dp[i - 1][j - 1])
      }
    }
    return dp[m][n]
  }

  useEffect(() => {
    if (emptySearchResult) {
      let minimum = 100
      let suggestedString
      if (tab === 'Static Icons') {
        for (let i = 0; i < eosIconsState.iconsCategory.length; i++) {
          for (
            let j = 0;
            j < eosIconsState.iconsCategory[i].icons.length;
            j++
          ) {
            const currentDistance = editDistance(
              searchValue,
              eosIconsState.iconsCategory[i].icons[j].name
            )
            if (currentDistance < minimum) {
              minimum = currentDistance
              suggestedString = eosIconsState.iconsCategory[i].icons[j].name
            }
          }
        }
        setSuggestedString(suggestedString)
      } else {
        let minimum = 100
        let suggestedString
        for (let i = 0; i < eosIconsState.animatedIcons.length; i++) {
          const currentDistance = editDistance(
            searchValue,
            eosIconsState.animatedIcons[i]
          )
          if (currentDistance < minimum) {
            minimum = currentDistance
            suggestedString = eosIconsState.animatedIcons[i]
          }
        }
        setSuggestedString(suggestedString)
      }
    }
  }, [emptySearchResult, tab, searchValue])

  useEffect(() => {
    if (!selectMultiple) {
      window.history.replaceState(
        '',
        'EOS Icons',
        `${window.location.pathname}`
      )
      setSearchValue('')
    }

    const count = getSearchResults(searchValue)

    if (count === 0) {
      setEmptySearchResult(true)
    } else {
      setEmptySearchResult(false)
    }

    dispatch({
      type:
        tab === 'Static Icons'
          ? 'TOGGLE_SEARCH_REGULAR_ICONS'
          : 'TOGGLE_SEARCH_ANIMATED_ICONS',
      search: selectMultiple ? searchValue : ''
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tab, dispatch, selectMultiple])

  useEffect(() => {
    if (searchValue === '' || searchValue === null) {
      setEmptySearchResult(false)
      closeHowTo()
      dispatch({
        type:
          tab === 'Static Icons'
            ? 'TOGGLE_SEARCH_REGULAR_ICONS'
            : 'TOGGLE_SEARCH_ANIMATED_ICONS',
        search: ''
      })
    }
  }, [dispatch, searchValue, tab])

  const setIconInSearch = () => {
    return dispatch({
      type: 'TOGGLE_SEARCH_REGULAR_ICONS',
      search: urlIconName
    })
  }

  const setTagInSearch = () => {
    return dispatch({
      type: 'TOGGLE_SEARCH_REGULAR_ICONS',
      search: urlTagName
    })
  }

  useEffect(() => {
    if (urlIconName) {
      const iconDetails = eosIconsState.icons.filter(
        (icon) => icon.name === urlIconName
      )

      if (!iconSelected) {
        setIconInSearch()
        setSearchValue(urlIconName)
      }
      if (iconDetails.length) {
        setShowPanel(true)
        setIconSelected({ name: urlIconName, tags: iconDetails[0].tags })
      }
    }

    if (urlTagName !== null) {
      setTagInSearch()
      setSearchValue(urlTagName)
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [urlIconName, urlTagName])

  const closeHowTo = () => {
    setSearchValue('')
    setShowPanel(false)
    setIconSelected('')
    window.history.replaceState('', 'EOS Icons', `${window.location.pathname}`)
  }

  const suggestionSearch = () => {
    setEmptySearchResult(false)
    closeHowTo()
    dispatch({
      type:
        tab === 'Static Icons'
          ? 'TOGGLE_SEARCH_REGULAR_ICONS'
          : 'TOGGLE_SEARCH_ANIMATED_ICONS',
      search: suggestedString
    })
    setSearchValue(suggestedString)
  }

  // Mark icon as active
  const isActive = (current, appState) => {
    if (appState.customize) {
      return appState.multipleIcons.indexOf(current) >= 0
    } else {
      return current === iconSelected.name
    }
  }

  const selectIcon = (icon, callback) => {
    setShowPanel(icon !== iconSelected)
    setIconSelected(icon === iconSelected ? '' : icon)
    if (selectMultiple) {
      window.history.replaceState(
        '',
        'EOS Icons',
        `${window.location.pathname}?iconName=${icon.name}`
      )
    }
    return callback
  }

  /* Toggle customizable functionality */
  const toggleCustomize = (callback) => {
    setSelectMultiple(!selectMultiple)
    props.action()
    return callback
  }

  /* Function to close HowToPanel upon switching tabs */
  const tabSwitch = (e) => {
    if (e === tab) {
      setActiveTab(e)
    } else {
      setActiveTab(e)
      if (e === 'Static Icons') {
        setAnimatedHistory(iconSelected)
        if (staticHistory === '') {
          const storeSearchValue = searchValue
          closeHowTo()
          setSearchValue(storeSearchValue)
        } else {
          setIconSelected(staticHistory)
          setShowPanel(true)
        }
      } else {
        setStaticHistory(iconSelected)
        if (animatedHistory === '') {
          const storeSearchValue = searchValue
          closeHowTo()
          setSearchValue(storeSearchValue)
        } else {
          setIconSelected(animatedHistory)
          setShowPanel(true)
        }
      }
    }
  }

  const getSearchResults = (value) => {
    if (tab === 'Static Icons') {
      let count = 0
      for (let i = 0; i < eosIconsState.iconsCategory.length; i++) {
        for (let j = 0; j < eosIconsState.iconsCategory[i].icons.length; j++) {
          const icon = eosIconsState.iconsCategory[i].icons[j]
          if (
            icon.name.includes(value.toLowerCase()) ||
            icon.tags.includes(value.toLowerCase())
          ) {
            count += 1
          }
        }
      }
      return count
    } else {
      let count = 0
      for (let i = 0; i < eosIconsState.animatedIcons.length; i++) {
        if (eosIconsState.animatedIcons[i].includes(value)) {
          count += 1
        }
      }
      return count
    }
  }

  return (
    <>
      <PageHeader showHeaderIcon={true}>
        <div className='icons-control'>
          <div className='icons-control-search'>
            <i
              className={`eos-icons ${
                searchValue.length ? 'cursor-pointer' : ''
              }`}
              onClick={() => {
                if (searchValue.length > 0) {
                  searchRef.current.value = ''
                  closeHowTo()
                }
              }}
            >
              {searchValue === '' ? 'search' : 'close'}
            </i>
            <input
              value={searchValue}
              ref={searchRef}
              className='search-input'
              type='text'
              name='search'
              onChange={(event) => {
                setSearchValue(event.target.value)

                if (event.target.value === '') {
                  closeHowTo()
                }

                const count = getSearchResults(event.target.value)

                if (count === 0) {
                  setEmptySearchResult(true)
                } else {
                  setEmptySearchResult(false)
                }

                dispatch({
                  type:
                    tab === 'Static Icons'
                      ? 'TOGGLE_SEARCH_REGULAR_ICONS'
                      : 'TOGGLE_SEARCH_ANIMATED_ICONS',
                  search: event.target.value
                })
              }}
            />
            {!size?.isMobile ? (
              <CategorySelector disabled={tab === 'Animated Icons'} />
            ) : (
              ' '
            )}
          </div>

          <div className='icons-control-dynamic'>
            {size?.isMobile ? (
              <CategorySelector disabled={tab === 'Animated Icons'} />
            ) : (
              ' '
            )}
          </div>
        </div>
        <div className='icon-information'>
          {tab === 'Static Icons' ? (
            !state.customize ? (
              <div>
                <ShowHowToUse
                  tab={tab}
                  showPanel={showPanel}
                  iconSelected={iconSelected}
                  closeHowTo={closeHowTo}
                />
              </div>
            ) : (
              <div className='how-to-use-block'>
                <CustomizeIconsPanel
                  selectAll={() =>
                    dispatch({
                      type: 'ADD_ALL_ICONS',
                      search: searchValue
                    })
                  }
                  deselectAll={() => {
                    dispatch({ type: 'REMOVE_ALL_ICONS' })
                    setSearchValue('')
                    window.history.replaceState(
                      '',
                      'EOS Icons',
                      `${window.location.pathname}`
                    )
                  }}
                />
              </div>
            )
          ) : (
            <div>
              <ShowHowToUse
                tab={tab}
                showPanel={showPanel}
                iconSelected={iconSelected}
                closeHowTo={closeHowTo}
                setSearchValue={setSearchValue}
              />
            </div>
          )}
        </div>
      </PageHeader>
      <div className='container no-padding'>
        <Tabs
          setTab={(e) => tabSwitch(e)}
          customize={state.customize}
          showPanel={showPanel}
          toggleCustomize={(callback) => toggleCustomize(callback)}
          showMultipleSwitch={true}
        >
          <div label='Static Icons'>
            {emptySearchResult && (
              <div>
                <h3 className='suggested-search-line'>
                  Did you mean{' '}
                  <span className='suggested-search' onClick={suggestionSearch}>
                    {suggestedString}
                  </span>{' '}
                  ?
                </h3>
                <img
                  className='icons-search'
                  src={require('../assets/images/no.jpg')}
                  height='400px'
                  alt='Sorry, no icons were found'
                />
              </div>
            )}
            {state.iconsCategory.map((categoryObject, index) => {
              return categoryObject.icons.length > 0 ? (
                <div key={index}>
                  <h4 className='category'>{categoryObject.category}</h4>
                  <div className='icons-list'>
                    {categoryObject.icons.map((icon, i) => (
                      <Icon
                        size={36}
                        active={isActive(icon.name, state)}
                        key={i}
                        name={icon.name}
                        action={() =>
                          selectIcon(
                            icon,
                            dispatch({
                              type: state.customize ? 'ADD_MULTIPLE_ICONS' : '',
                              selection: icon.name
                            })
                          )
                        }
                      />
                    ))}
                  </div>
                </div>
              ) : (
                ''
              )
            })}
          </div>
          <div label='Animated Icons'>
            {emptySearchResult && (
              <div>
                <h3 className='suggested-search-line'>
                  Did you mean{' '}
                  <span className='suggested-search' onClick={suggestionSearch}>
                    {suggestedString}
                  </span>{' '}
                  ?
                </h3>
                <img
                  className='icons-search'
                  src={require('../assets/images/no.jpg')}
                  height='400px'
                  alt='Sorry, no icons were found'
                />
              </div>
            )}
            <div className='icons-list'>
              {state.animatedIcons.map((icon, index) => (
                <div
                  className={`icon-container ${
                    icon === iconSelected?.name ? 'active' : ''
                  }`}
                  key={index}
                  onClick={() => {
                    setIconSelected({ name: icon })
                    setShowPanel(true)
                  }}
                >
                  <img
                    src={require(`eos-icons/animated-svg/${icon}.svg`)}
                    alt={icon}
                  />
                  {icon}
                </div>
              ))}
            </div>
          </div>
        </Tabs>
      </div>
    </>
  )
}

const ShowHowToUse = ({
  tab,
  showPanel,
  iconSelected,
  closeHowTo,
  setSearchValue
}) => {
  return tab === 'Static Icons' ? (
    <div>
      <HowTo
        show={showPanel}
        iconName={iconSelected?.name}
        iconTags={iconSelected?.tags}
        type='static'
        close={closeHowTo}
        setSearchValue={setSearchValue}
      />
    </div>
  ) : (
    <HowTo
      show={showPanel}
      iconName={iconSelected?.name}
      iconTags=''
      type='animated'
      close={closeHowTo}
      setSearchValue={setSearchValue}
    />
  )
}

export default IconsSet
