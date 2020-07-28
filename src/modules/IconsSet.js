import React, { useState } from 'react'
import AppContext from '../utils/AppContext'
/* Components */
import Icon from '../components/IconDisplay'
import Tabs from '../components/Tabs'
import Toogle from '../components/Toggle'
import CustomizeIconsPanel from '../components/CustomizeIconsPanel'
import AnimatedIcons from './AnimatedIcons'
import HowTo from '../components/HowToPanel'

const IconsSet = (props) => {
  const selectIcon = (icon, callback) => {
    setShowPanel(icon !== iconSelected)
    setIconSelected(icon === iconSelected ? '' : icon)
    return callback
  }

  /* Toggle customizable functionality */
  const toggleCustomize = (callback) => {
    props.action()
    return callback
  }

  // show HowTo panel
  const [iconSelected, setIconSelected] = useState('')
  const [showPanel, setShowPanel] = useState(false)
  const [tab, setActiveTab] = useState('Regular Icons')

  const closeHowTo = () => {
    setShowPanel(false)
    setIconSelected('')
  }

  // Mark icon as active
  const isActive = (current, appState) => {
    if (appState.customize) {
      return appState.multipleIcons.indexOf(current) >= 0
    } else {
      return current === iconSelected.name
    }
  }

  return (
    <AppContext.Consumer>
      {({ state, dispatch }) => (
        <>
          <div className='toolbar'>
            <Toogle
              name='Select multiple'
              id='js-icon-picker'
              onClick={() =>
                toggleCustomize(dispatch({ type: 'TOGGLE_CUSTOMIZE' }))
              }
            />
            <input
              className='search-input'
              type='text'
              name='search'
              placeholder='Search Icons...'
              onChange={(event) =>
                dispatch({
                  type:
                    tab === 'Regular Icons'
                      ? 'TOGGLE_SEARCH_REGULAR_ICONS'
                      : 'TOGGLE_SEARCH_ANIMATED_ICONS',
                  search: event.target.value
                })
              }
            />
          </div>
          <Tabs setTab={setActiveTab}>
            <div label='Regular Icons'>
              <div className='total-icons'>
                <b>Total set: {state.icons.length}</b>
              </div>
              <div className='icons-list' style={{ flexDirection: 'column' }}>
                {state.iconsCategory.map((categoryObject, index) => {
                  return categoryObject.icons.length > 0 ? (
                    <div className='icons-list-category' key={index}>
                      <h3>
                        {categoryObject.category !== ''
                          ? categoryObject.category
                          : 'uncategorized'}
                        : {categoryObject.icons.length}
                      </h3>
                      <div className='icons-list-category-icons'>
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

              {!state.customize ? (
                <div className='how-to-use-block'>
                  <HowTo
                    show={showPanel}
                    iconName={iconSelected.name}
                    iconTags={iconSelected.tags}
                    type='static'
                    close={closeHowTo}
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
            <div label='Animated Icons'>
              <div className='total-icons'>
                <strong>
                  <b>Total icons: {state.animatedIcons.length}</b>
                </strong>
              </div>
              <div className='icons-list'>
                <AnimatedIcons animatedIconsList={state.animatedIcons} />
              </div>
            </div>
          </Tabs>
        </>
      )}
    </AppContext.Consumer>
  )
}

export default IconsSet
