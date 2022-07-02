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
import { useWindowsSize } from '../hooks/useWindow'
import IconEditor from '../components/IconEditor'

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
  const tabType = urlParams.get('type')
  const [selectMultiple, setSelectMultiple] = useState(true)
  const [emptySearchResult, setEmptySearchResult] = useState(false)
  const [suggestedString, setSuggestedString] = useState('')
  const [iconEditor, setIconEditor] = useState(false)
  const [userSearchInput, setUserSearchInput] = useState(false)
  const [tagSelected, setTagSelected] = useState('')

  const iconEditorToggle = () => {
    setIconEditor(!iconEditor)
  }

  const handleKeyPress = (event) => {
    if (event) {
      setUserSearchInput(true)
    }
  }

  useEffect(() => {
    if (urlTagName) setTagSelected(urlTagName)
    else {
      if (iconSelected !== '') {
        tab === 'Static Icons'
          ? window.history.replaceState(
              '',
              'EOS Icons',
              `${window.location.pathname}?iconName=${iconSelected.name}&type=static`
            )
          : window.history.replaceState(
              '',
              'EOS Icons',
              `${window.location.pathname}?iconName=${iconSelected.name}&type=animated`
            )
      }
    }
  }, [urlTagName, iconSelected, tab])

  useEffect(() => {
    if (tagSelected && iconSelected === '') {
      window.history.replaceState(
        '',
        'EOS Icons',
        `${window.location.pathname}?tagName=${tagSelected}`
      )
    }
  })

  const activeIconRef = useRef(null)
  useEffect(() => {
    if (iconSelected !== '') {
      window.addEventListener('DOMContentLoaded', () => {
        window.scrollTo(0, activeIconRef.current.offsetTop)
      })
    }
  })

  useEffect(() => {
    props.container.current = resetIconSetStateFromNavbarLogo
  }, [props.container])

  const resetTabsStateRef = useRef(null)

  const resetIconSetStateFromNavbarLogo = () => {
    window.scroll(0, 0)
    setShowPanel(false)
    setSearchValue('')
    setIconSelected('')
    setActiveTab('Static Icons')
    setStaticHistory('')
    setSelectMultiple(true)
    setAnimatedHistory('')
    setEmptySearchResult(false)
    setSuggestedString('')
    setTagSelected('')
    resetTabsStateRef.current()
  }

  let setSearchWithUrlParam = urlIconName

  if (setSearchWithUrlParam === '' || setSearchWithUrlParam === null) {
    if (urlTagName !== null && urlTagName !== '')
      setSearchWithUrlParam = urlTagName
  }

  useEffect(() => {
    if (setSearchWithUrlParam !== null && setSearchWithUrlParam !== '')
      setSearchValue(setSearchWithUrlParam)
    if (tabType === 'static') {
      setActiveTab('Static Icons')
    } else if (tabType === 'animated') {
      setActiveTab('Animated Icons')
    }
  }, [setSearchWithUrlParam, tabType])

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
    window.history.replaceState('', 'EOS Icons', `${window.location.pathname}`)
    setSearchValue('')
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
      search: tab === 'Static Icons' ? searchValue : ''
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tab, dispatch])

  useEffect(() => {
    if (searchValue === '' || searchValue === null) {
      setUserSearchInput(false)
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
    if (tabType === 'static') {
      return dispatch({
        type: 'TOGGLE_SEARCH_REGULAR_ICONS',
        search: ''
      })
    } else {
      return dispatch({
        type: 'TOGGLE_SEARCH_ANIMATED_ICONS',
        search: urlIconName
      })
    }
  }

  const setTagInSearch = () => {
    return dispatch({
      type: 'TOGGLE_SEARCH_REGULAR_ICONS',
      search: urlTagName
    })
  }

  useEffect(() => {
    if (urlIconName) {
      let iconDetails
      if (tabType === 'static') {
        iconDetails = eosIconsState.icons.filter(
          (icon) => icon.name === urlIconName
        )
      } else {
        iconDetails = eosIconsState.animatedIcons.filter(
          (icon) => icon === urlIconName
        )
      }

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

    if (
      !userSearchInput &&
      urlTagName === null &&
      urlIconName === null &&
      tagSelected === ''
    ) {
      setSearchValue('')
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
    if (selectMultiple) {
      const iconObj = { name: icon.name, tags: icon.tags }
      setIconSelected(
        JSON.stringify(iconObj) === JSON.stringify(iconSelected) ? '' : iconObj
      )
      setShowPanel(JSON.stringify(iconObj) !== JSON.stringify(iconSelected))
      JSON.stringify(iconObj) === JSON.stringify(iconSelected)
        ? window.history.replaceState(
            '',
            'EOS Icons',
            `${window.location.pathname}`
          )
        : window.history.replaceState(
            '',
            'EOS Icons',
            `${window.location.pathname}?iconName=${icon.name}&type=static`
          )
    }
    return callback
  }

  const selectAnimatedIcon = (icon) => {
    setIconSelected({ name: icon } === iconSelected ? '' : { name: icon })
    setShowPanel({ name: icon } !== iconSelected)
    setSearchValue(icon === searchValue ? '' : icon)
    if (selectMultiple) {
      window.history.replaceState(
        '',
        'EOS Icons',
        `${window.location.pathname}?iconName=${icon}&type=animated`
      )
    }
  }

  /* Toggle customizable functionality */
  const toggleCustomize = (callback) => {
    setShowPanel(false)
    setSearchValue('')
    setIconSelected('')
    setSelectMultiple(!selectMultiple)
    window.history.replaceState('', 'EOS Icons', `${window.location.pathname}`)
    props.action()
    return callback
  }

  /* Function to close HowToPanel upon switching tabs */
  const tabSwitch = (e) => {
    if (e === tab) {
      setActiveTab(e)
    } else {
      toggleCustomize(dispatch({ type: 'TOGGLE_CUSTOMIZE_AND_DESELECT' }))
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

  const getWords = (values) => {
    let keywordsArray = []
    if (values.includes(';')) {
      keywordsArray = values.split(';')
      values = keywordsArray.join(',')
    }
    if (values.includes('-')) {
      keywordsArray = values.split('-')
      values = keywordsArray.join(',')
    }
    if (values.includes(' ')) {
      keywordsArray = values.split(' ')
      values = keywordsArray.join(',')
    }
    keywordsArray = values.split(',')
    return keywordsArray
  }
  const getSearchResults = (value) => {
    const words = getWords(value)
    if (tab === 'Static Icons') {
      let count = 0
      for (let k = 0; k < words.length; k++) {
        if (words[k].length === 0) {
          continue
        }
        for (let i = 0; i < eosIconsState.iconsCategory.length; i++) {
          for (
            let j = 0;
            j < eosIconsState.iconsCategory[i].icons.length;
            j++
          ) {
            const icon = eosIconsState.iconsCategory[i].icons[j]
            if (
              icon.name.includes(words[k].toLowerCase()) ||
              icon.tags.includes(words[k].toLowerCase())
            ) {
              count += 1
            }
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
          <label htmlFor='search-input-id' className='search-input-label'>
            Search:
          </label>
          <div className='icons-control-search'>
            <i
              className={`eos-icons ${
                searchValue.length ? 'cursor-pointer' : ''
              }`}
              onClick={() => {
                if (searchValue.length > 0) {
                  searchRef.current.value = ''
                  setTagSelected('')
                  closeHowTo()
                }
              }}
            >
              {searchValue === '' ? 'search' : 'close'}
            </i>
            <input
              id='search-input-id'
              value={searchValue}
              placeholder='Search'
              ref={searchRef}
              className='search-input'
              type='text'
              name='search'
              onKeyDown={handleKeyPress}
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
          {!state.customize ? (
            <div>
              <ShowHowToUse
                tab={tab}
                showPanel={showPanel}
                iconSelected={iconSelected}
                closeHowTo={closeHowTo}
                theme={state.iconsTheme}
              />
            </div>
          ) : (
            <div className='how-to-use-block'>
              <CustomizeIconsPanel
                iconType={tab === 'Animated Icons' ? 'animated' : 'static'}
                selectAll={() =>
                  dispatch({
                    type:
                      tab === 'Animated Icons'
                        ? 'ADD_ALL_ANIMATED_ICONS'
                        : 'ADD_ALL_STATIC_ICONS',
                    search: searchValue
                  })
                }
                deselectAll={() => {
                  dispatch({
                    type: 'REMOVE_ALL_ICONS'
                  })
                  setSearchValue('')
                  window.history.replaceState(
                    '',
                    'EOS Icons',
                    `${window.location.pathname}`
                  )
                }}
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
          currentTab={tab}
          toggleCustomize={(callback) => toggleCustomize(callback)}
          showMultipleSwitch={true}
          resetTabsState={true}
          resetTabsStateRef={resetTabsStateRef}
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
                    {categoryObject.icons.map((icon, i) =>
                      isActive(icon.name, state) ? (
                        <div ref={activeIconRef} key={i}>
                          <Icon
                            size={36}
                            active={isActive(icon.name, state)}
                            key={icon.name}
                            name={icon.name}
                            iconsTheme={state.iconsTheme}
                            type={'static'}
                            onClickAction={() =>
                              selectIcon(
                                icon,
                                dispatch({
                                  type: state.customize
                                    ? 'ADD_MULTIPLE_ICONS'
                                    : '',
                                  selection: icon.name
                                })
                              )
                            }
                            onDoubleClickAction={() => iconEditorToggle()}
                          />
                        </div>
                      ) : (
                        <Icon
                          size={36}
                          active={isActive(icon.name, state)}
                          key={icon.name}
                          name={icon.name}
                          iconsTheme={state.iconsTheme}
                          type={'static'}
                          onClickAction={() =>
                            selectIcon(
                              icon,
                              dispatch({
                                type: state.customize
                                  ? 'ADD_MULTIPLE_ICONS'
                                  : '',
                                selection: icon.name
                              })
                            )
                          }
                          onDoubleClickAction={() => iconEditorToggle()}
                        />
                      )
                    )}
                  </div>
                </div>
              ) : (
                ''
              )
            })}
          </div>
          <div label='Animated Icons'>
            {searchValue !== '' && emptySearchResult && (
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
                    isActive(icon, state) ? 'active' : ''
                  }`}
                  key={index}
                  onClick={() => {
                    if (state.customize) {
                      selectIcon(
                        icon,
                        dispatch({
                          type: state.customize ? 'ADD_MULTIPLE_ICONS' : '',
                          selection: icon
                        })
                      )
                    } else {
                      setIconSelected({ name: icon })
                      setShowPanel(true)
                      setSearchValue(icon)
                      window.history.replaceState(
                        '',
                        'EOS Icons',
                        `${window.location.pathname}?iconName=${icon}&type=animated`
                      )
                    }
                  }}
                  onDoubleClickAction={() => iconEditorToggle()}
                />
              ))}
            </div>
          </div>
        </Tabs>
        {iconEditor ? (
          tab === 'Static Icons' ? (
            <IconEditor
              isActive={iconEditor}
              show={iconEditorToggle}
              iconNames={[iconSelected?.name]}
              iconType={'static'}
              theme={state.iconsTheme}
            />
          ) : (
            <IconEditor
              isActive={iconEditor}
              show={iconEditorToggle}
              iconNames={[iconSelected?.name]}
              iconType={'animated'}
              theme={state.iconsTheme}
            />
          )
        ) : (
          ''
        )}
      </div>
    </>
  )
}

const ShowHowToUse = ({
  tab,
  showPanel,
  iconSelected,
  closeHowTo,
  setSearchValue,
  theme
}) => {
  return tab === 'Static Icons' ? (
    <div>
      <HowTo
        show={showPanel}
        iconName={iconSelected?.name}
        iconTags={iconSelected?.tags}
        type='static'
        theme={theme}
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
