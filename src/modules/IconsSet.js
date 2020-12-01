import React, { useState, useEffect } from 'react'
import AppContext from '../utils/AppContext'

/* Components */
import Icon from '../components/IconDisplay'
import Tabs from '../components/Tabs'
import Toogle from '../components/Toggle'
import CustomizeIconsPanel from '../components/CustomizeIconsPanel'
import HowTo from '../components/HowToPanel'
import { eosIconsState } from '../utils/EosIcons.store'
import PageHeader from '../components/PageHeader'
import { CategorySelector } from '../components/CategorySelector'
import { useWindowsSize } from '../hooks/useWidow'

const IconsSet = (props) => {
  const [iconSelected, setIconSelected] = useState('')
  const [showPanel, setShowPanel] = useState(false)
  const [size] = useWindowsSize()

  const [tab, setActiveTab] = useState('Static Icons')

  const queryString = window.location.search
  const urlParams = new URLSearchParams(queryString)
  const urlIconName = urlParams.get('iconName')

  useEffect(() => {
    if (urlIconName) {
      const iconDetails = eosIconsState.icons.filter(
        (icon) => icon.name === urlIconName
      )
      if (iconDetails.length) {
        setShowPanel(true)
        setIconSelected({ name: urlIconName, tags: iconDetails[0].tags })
      }
    }
  }, [urlIconName])

  const closeHowTo = () => {
    setShowPanel(false)
    setIconSelected('')
    window.history.replaceState('', 'EOS Icons', `${window.location.pathname}`)
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
    window.history.replaceState(
      '',
      'EOS Icons',
      `${window.location.pathname}?iconName=${icon.name}`
    )
    return callback
  }

  /* Toggle customizable functionality */
  const toggleCustomize = (callback) => {
    props.action()
    return callback
  }

  return (
    <AppContext.Consumer>
      {({ state, dispatch }) => (
        <>
          <PageHeader>
            <h1>More than 1000 free icons</h1>
            <div className='icons-control'>
              <div className='icons-control-search'>
                <i className='eos-icons'>search</i>
                <input
                  className='search-input'
                  type='text'
                  name='search'
                  onChange={(event) =>
                    dispatch({
                      type:
                        tab === 'Static Icons'
                          ? 'TOGGLE_SEARCH_REGULAR_ICONS'
                          : 'TOGGLE_SEARCH_ANIMATED_ICONS',
                      search: event.target.value
                    })
                  }
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

                <div className='icons-control-toggle'>
                  <Toogle
                    disabledStatus={tab === 'Animated Icons'}
                    name='Select multiple'
                    id='js-icon-picker'
                    onClick={() =>
                      toggleCustomize(dispatch({ type: 'TOGGLE_CUSTOMIZE' }))
                    }
                  />
                </div>
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
                  />
                </div>
              ) : (
                <div className='how-to-use-block'>
                  <CustomizeIconsPanel
                    selectAll={() => dispatch({ type: 'ADD_ALL_ICONS' })}
                    deselectAll={() => dispatch({ type: 'REMOVE_ALL_ICONS' })}
                  />
                </div>
              )}
            </div>
          </PageHeader>
          <div className='container no-padding'>
            <Tabs
              setTab={setActiveTab}
              customize={state.customize}
              showPanel={showPanel}
            >
              <div label='Static Icons'>
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
                                  type: state.customize
                                    ? 'ADD_MULTIPLE_ICONS'
                                    : '',
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
                <div className='icons-list'>
                  {state.animatedIcons.map((icon, index) => (
                    <div className='icon-container' key={index}>
                      <img
                        src={require(`eos-icons/animated-svg/${icon}.svg`)}
                        alt={icon}
                        className={icon === iconSelected?.name ? 'active' : ''}
                        onClick={() => {
                          setIconSelected({ name: icon })
                          setShowPanel(true)
                        }}
                      />
                      {icon}
                    </div>
                  ))}
                </div>
              </div>
            </Tabs>
          </div>
        </>
      )}
    </AppContext.Consumer>
  )
}

const ShowHowToUse = ({ tab, showPanel, iconSelected, closeHowTo }) => {
  return tab === 'Static Icons' ? (
    <div>
      <HowTo
        show={showPanel}
        iconName={iconSelected?.name}
        iconTags={iconSelected?.tags}
        type='static'
        close={closeHowTo}
      />
    </div>
  ) : (
    <HowTo
      show={showPanel}
      iconName={iconSelected?.name}
      iconTags=''
      type='animated'
      close={closeHowTo}
    />
  )
}

export default IconsSet
